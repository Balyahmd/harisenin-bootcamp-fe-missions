import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { courses as initialCourses } from "../datas/course";
import { CATEGORIES } from "../constants/constats";

import CourseFilters from "../components/Manage-course/CourseFilters";
import CourseTable from "../components/Manage-course/CourseTable";
import CourseModal from "../components/Manage-course/CourseModal";
import Pagination from "../components/Pagination";

import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 10;

export default function ManageCoursePage() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem("courses");

    return savedCourses ? JSON.parse(savedCourses) : initialCourses;
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [deleteCourse, setDeleteCourse] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const categories = CATEGORIES.slice(1);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.mentor.toLowerCase().includes(search.toLowerCase());

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
    setDeleteCourse(course);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!deleteCourse) return;

    setCourses((prev) => prev.filter((item) => item.id !== deleteCourse.id));

    setDeleteModalOpen(false);
    setDeleteCourse(null);

    toast.success("Course berhasil dihapus!");
  };

  const handleSubmit = (form) => {
    if (selectedCourse) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === selectedCourse.id
            ? {
                ...course,
                ...form,
              }
            : course,
        ),
      );

      toast.success("Course berhasil diperbarui!");
    } else {
      setCourses((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now(),
          rating: 0,
          reviews: 0,
        },
      ]);
      toast.success("Course berhasil ditambahkan!");
    }

    setModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/beranda")}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500  transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
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

      <CourseModal
        open={modalOpen}
        initialCourse={selectedCourse}
        onClose={() => {
          setModalOpen(false);
          setSelectedCourse(null);
        }}
        onSubmit={handleSubmit}
      />

      {deleteModalOpen && deleteCourse && (
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
                "{deleteCourse.title}"
              </span>
              ?
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Course yang dihapus tidak dapat dikembalikan.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setDeleteModalOpen(false);
                  setDeleteCourse(null);
                }}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Batal
              </button>

              <button
                type="button"
                onClick={handleConfirmDelete}
                className="rounded-lg bg-error px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
