import { BookOpen, Pencil, Star, Trash2, Video } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

function getLessonCount(curriculum = []) {
  return curriculum.reduce(
    (total, module) => total + (module.lessons?.length || 0),
    0,
  );
}

export default function CourseTable({ courses, onEdit, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-290">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Course
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Mentor
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Kategori
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Harga
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Rating
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Materi
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {courses.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="flex min-h-50 flex-col items-center justify-center text-center">
                    <BookOpen className="mb-3 h-10 w-10 text-gray-300" />

                    <h3 className="text-sm font-semibold text-gray-700">
                      Course tidak ditemukan
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Coba ubah kata pencarian atau filter kategori.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              courses.map((course) => {
                const lessonCount = getLessonCount(course.curriculum);
                return (
                  <tr key={course.id} className="transition hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                          {course.thumbnail ? (
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-xs text-gray-400">
                              No Image
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="max-w-70 truncate text-sm font-semibold text-gray-800">
                            {course.title}
                          </p>

                          <p className="mt-1 max-w-70 truncate text-xs text-gray-400">
                            {course.desc}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-green-100 text-xs font-semibold text-green-700">
                          {course.avatarMentor ? (
                            <img
                              src={course.avatarMentor}
                              alt="Mentor"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            course.mentor
                              ?.split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase() || "NA"
                          )}
                        </div>

                        <span className="text-sm text-gray-700">
                          {course.mentor}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full bg-main-secondary-100 px-3 py-1 text-xs font-medium text-main-tentiary">
                        {course.category}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-green-600">
                        {course.price != null ? formatCurrency(course.price) : "-"}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

                        <span className="text-sm font-medium text-gray-700">
                          {course.rating || 0}
                        </span>

                        <span className="text-xs text-gray-400">
                          ({course.reviews || 0})
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {course.curriculum?.length || 0}
                        </span>

                        <span className="flex items-center gap-1">
                          <Video className="h-4 w-4" />
                          {lessonCount}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => onEdit(course)}
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-main-secondary-100 hover:text-main-secondary"
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onDelete(course)}
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-error"
                          title="Hapus"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
