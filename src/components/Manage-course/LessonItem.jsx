import { GripVertical, Trash2 } from "lucide-react";

export default function LessonItem({
  lesson,
  moduleIndex,
  lessonIndex,
  onChange,
  onDelete,
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3">
      <GripVertical className="h-4 w-4 shrink-0 text-gray-300" />

      <input
        type="text"
        value={lesson.title}
        onChange={(e) =>
          onChange(moduleIndex, lessonIndex, {
            ...lesson,
            title: e.target.value,
          })
        }
        placeholder="Judul lesson"
        className="min-w-0 flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
      />

      <select
        value={lesson.type || "video"}
        onChange={(e) =>
          onChange(moduleIndex, lessonIndex, {
            ...lesson,
            type: e.target.value,
          })
        }
        className="rounded-md border border-gray-200 px-2 py-2 text-sm outline-none focus:border-green-500"
      >
        <option value="video">Video</option>
        <option value="document">Document</option>
        <option value="quiz">Quiz</option>
      </select>

      <button
        type="button"
        onClick={() => onDelete(moduleIndex, lessonIndex)}
        className="rounded-md p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}