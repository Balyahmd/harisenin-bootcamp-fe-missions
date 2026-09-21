import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CATEGORIES } from "../constants/constats";

import CourseFilters from "../components/Manage-course/CourseFilters";
import CourseTable from "../components/Manage-course/CourseTable";
import CourseModal from "../components/Manage-course/CourseModal";
import Pagination from "../components/Pagination";

import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import CourseStats from "../components/Manage-course/CourseStats";
import { useDispatch, useSelector } from "react-redux";
import ListView from "../components/ListView";
import {
  addCourse,
  updateCourse,
  removeCourse,
  setLoading,
  setError,
} from "../store/redux/courseReducer";
import {
  createCourse,
  editCourse,
  deleteCourse,
} from "../services/api/courseApi";

const ITEMS_PER_PAGE = 10;

export default function ManageCoursePage() {
  const navigate = useNavigate();

  const { courses, loading, error } = useSelector((state) => state.courses);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const dispatch = useDispatch();
  const categories = CATEGORIES.slice(1);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchSearch =
        course.title?.toLowerCase().includes(search.toLowerCase()) ||
        course.mentor?.toLowerCase().includes(search.toLowerCase());

      const matchCategory = !category || course.category === category;

      return matchSearch && matchCategory;
    });
  }, [courses, search, category]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const currentCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return filteredCourses.slice(startIndex, endIndex);
  }, [filteredCourses, currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleAdd = () => {
    setSelectedCourse(null);
    setModalOpen(true);
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const handleDelete = (course) => {
    setDeleteTarget(course);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;

    setDeleting(true);
    try {
      await deleteCourse(deleteTarget.id);

      dispatch(removeCourse(deleteTarget.id));
      toast.success("Course berhasil dihapus!");
      setDeleteModalOpen(false);
      setDeleteTarget(null);
    } catch (err) {
      toast.error(err.message || "Gagal menghapus course");
    } finally {
      setDeleting(false);
    }
  };

  const handleSubmit = async (form) => {
    setSubmitting(true);
    try {
      if (selectedCourse) {
        const updatedCourse = await editCourse(selectedCourse.id, form);
        dispatch(updateCourse(updatedCourse));
        toast.success("Course berhasil diperbarui!");
      } else {
        const newCourse = await createCourse(form)

        dispatch(addCourse(newCourse));
        toast.success("Course berhasil ditambahkan!");
      }

      setModalOpen(false);
      setSelectedCourse(null);
    } catch (err) {
      toast.error(err.message || "Gagal menyimpan course");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ListView />
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/beranda")}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
            title="Kembali ke Home"
            aria-label="Kembali ke Home"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Kelola Course
          </h1>
        </div>

        <p className="mt-1.5 text-sm text-gray-500">
          Kelola course yang tersedia di platform.
        </p>
      </div>

      <CourseStats courses={courses} loading={loading} />

      <CourseFilters
        search={search}
        setSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
        category={category}
        setCategory={(value) => {
          setCategory(value);
          setCurrentPage(1);
        }}
        categories={categories}
        onAdd={handleAdd}
      />

      {loading ? (
        <div className="flex items-center justify-center rounded-xl border border-gray-100 bg-white py-16 text-sm text-gray-500">
          Memuat data course...
        </div>
      ) : error ? (
        <div className="flex items-center justify-center rounded-xl border border-red-100 bg-red-50 py-16 text-sm text-error">
          {error}
        </div>
      ) : (
        <>
          <CourseTable
            courses={currentCourses}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          {totalPages > 0 && (
            <div className="mt-5 flex justify-end">
              <Pagination
                page={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          )}
        </>
      )}

      <CourseModal
        open={modalOpen}
        initialCourse={selectedCourse}
        submitting={submitting}
        onClose={() => {
          setModalOpen(false);
          setSelectedCourse(null);
        }}
        onSubmit={handleSubmit}
      />

      {deleteModalOpen && deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
            <div className="flex gap-3 items-center flex-col mb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50">
                <Trash2 className="h-5 w-5 text-error" />
              </div>

              <h2 className="text-lg font-semibold text-gray-900">
                Hapus Course?
              </h2>
            </div>

            <p className="mt-2 text-sm leading-5 text-gray-500">
              Apakah kamu yakin ingin menghapus{" "}
              <span className="font-medium text-gray-700">
                "{deleteTarget.title}"
              </span>
              ?
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Course yang dihapus tidak dapat dikembalikan.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={deleting}
                onClick={() => {
                  setDeleteModalOpen(false);
                  setDeleteTarget(null);
                }}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
              >
                Batal
              </button>

              <button
                type="button"
                disabled={deleting}
                onClick={handleConfirmDelete}
                className="rounded-lg bg-error px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 disabled:opacity-50"
              >
                {deleting ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
