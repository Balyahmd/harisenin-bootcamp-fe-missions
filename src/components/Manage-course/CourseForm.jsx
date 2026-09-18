import CurriculumBuilder from "./CuriculumBuilder";
import { CATEGORIES } from "../../constants/constats";

const inputClass =
  "mt-1 h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100";

export default function CourseForm({ form, setForm, errors = {} }) {
  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium text-gray-700">
          Judul Course
        </label>

        <input
          type="text"
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="Contoh: Fullstack Web Developer"
          className={inputClass}
        />

        {errors.title && (
          <p className="mt-1 text-xs text-red-500">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Deskripsi</label>

        <textarea
          value={form.desc}
          onChange={(e) => updateField("desc", e.target.value)}
          placeholder="Masukkan deskripsi course"
          rows={3}
          className="mt-1 w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />

        {errors.desc && (
          <p className="mt-1 text-xs text-red-500">{errors.desc}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Thumbnail URL
        </label>

        <input
          type="url"
          value={form.thumbnail}
          onChange={(e) => updateField("thumbnail", e.target.value)}
          placeholder="https://example.com/course.jpg"
          className={inputClass}
        />

        {form.thumbnail && (
          <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
            <img
              src={form.thumbnail}
              alt="Preview thumbnail"
              className="h-40 w-full object-cover"
            />
          </div>
        )}

        {errors.thumnail && (
          <p className="mt-1 text-xs text-red-500">{errors.thumnail}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700">Kategori</label>

          <select
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
            className={inputClass}
          >
            <option value="">Pilih kategori</option>

            {CATEGORIES.slice(1).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="mt-1 text-xs text-red-500">{errors.category}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Mentor</label>

          <input
            type="text"
            value={form.mentor}
            onChange={(e) => updateField("mentor", e.target.value)}
            placeholder="Nama mentor"
            className={inputClass}
          />

          {errors.mentor && (
            <p className="mt-1 text-xs text-red-500">{errors.mentor}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700">Harga</label>

          <input
            type="number"
            min="0"
            value={form.price}
            onChange={(e) => updateField("price", e.target.value)}
            placeholder="150000"
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Harga Normal
          </label>

          <input
            type="number"
            min="0"
            value={form.originalPrice}
            onChange={(e) => updateField("originalPrice", e.target.value)}
            placeholder="300000"
            className={inputClass}
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-5">
        <CurriculumBuilder
          value={form.curriculum}
          onChange={(curriculum) => updateField("curriculum", curriculum)}
        />
      </div>
    </div>
  );
}
