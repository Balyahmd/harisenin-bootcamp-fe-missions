import { useEffect, useState } from "react";
import { X } from "lucide-react";

import CourseForm from "./CourseForm";
import { getRandomAvatar } from "../../utils/randomAvatar";

const emptyForm = {
  title: "",
  desc: "",
  category: "",
  avatarMentor: "",
  mentor: "",
  price: "",
  originalPrice: "",
  thumbnail: "",
  rating: "",
  discountLabel: "",
  curriculum: [],
};


function getRandomRating() {
  const rating = 4 + Math.random();
  return Math.round(rating * 10) / 10;
}

function calculateDiscount(price, originalPrice) {
  const numPrice = Number(price);
  const numOriginal = Number(originalPrice);

  if (!numOriginal || numOriginal <= numPrice) return 0;

  return Math.round(((numOriginal - numPrice) / numOriginal) * 100);
}

export default function CourseModal({
  open,
  onClose,
  onSubmit,
  initialCourse = null,
}) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const isEdit = Boolean(initialCourse);

  useEffect(() => {
    if (initialCourse) {
      setForm({
        ...emptyForm,
        ...initialCourse,
        curriculum: initialCourse.curriculum || [],
      });
    } else {
      setForm({
        ...emptyForm,
        avatarMentor: getRandomAvatar(),
        rating: getRandomRating(),
      });
    }

    setErrors({});
  }, [initialCourse, open]);

  if (!open) return null;

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "Judul course wajib diisi.";
    }

    if (!form.desc.trim()) {
      newErrors.desc = "Deskripsi wajib diisi.";
    }

    if (!form.category.trim()) {
      newErrors.category = "Kategori wajib diisi.";
    }

    if (!form.mentor.trim()) {
      newErrors.mentor = "Mentor wajib diisi.";
    }

    if (!form.price) {
      newErrors.price = "Harga wajib diisi.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const price = Number(form.price);
    const originalPrice = form.originalPrice
      ? Number(form.originalPrice)
      : null;

    const discountLabel = calculateDiscount(price, originalPrice);


    onSubmit({
      ...form,
      price: Number(form.price),
      originalPrice: form.originalPrice ? Number(form.originalPrice) : null,
      avatarMentor: form.avatarMentor || getRandomAvatar(),
      rating: form.rating || getRandomRating(),
      discountLabel
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {isEdit ? "Edit Course" : "Tambah Course"}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {isEdit ? "Perbarui informasi course." : "Tambahkan course baru."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-6">
            <CourseForm form={form} setForm={setForm} errors={errors} />
          </div>

          <div className="flex shrink-0 justify-end gap-3 border-t border-gray-200 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Batal
            </button>

            <button
              type="submit"
              className="rounded-lg bg-main-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-main-primary/70"
            >
              {isEdit ? "Simpan Perubahan" : "Tambah Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
