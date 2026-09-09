import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";

import LessonItem from "./LessonItem";

export default function CurriculumModule({
  module,
  moduleIndex,
  expanded,
  onToggle,
  onChangeTitle,
  onAddLesson,
  onChangeLesson,
  onDeleteLesson,
  onDeleteModule,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50">
      <div className="flex items-center gap-3 p-4">
        <button
          type="button"
          onClick={() => onToggle(moduleIndex)}
          className="text-gray-400"
        >
          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        <div className="flex-1">
          <input
            type="text"
            value={module.title}
            onChange={(e) =>
              onChangeTitle(moduleIndex, e.target.value)
            }
            placeholder={`Module ${moduleIndex + 1}`}
            className="w-full bg-transparent text-sm font-semibold text-gray-800 outline-none"
          />

          <p className="mt-1 text-xs text-gray-400">
            {module.lessons?.length || 0} lesson
          </p>
        </div>

        <button
          type="button"
          onClick={() => onDeleteModule(moduleIndex)}
          className="rounded-md p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
          title="Hapus module"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Lessons */}
      {expanded && (
        <div className="border-t border-gray-200 p-4">
          <div className="space-y-2">
            {module.lessons?.map((lesson, lessonIndex) => (
              <LessonItem
                key={lesson.id || lessonIndex}
                lesson={lesson}
                moduleIndex={moduleIndex}
                lessonIndex={lessonIndex}
                onChange={onChangeLesson}
                onDelete={onDeleteLesson}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => onAddLesson(moduleIndex)}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 px-3 py-2 text-xs font-medium text-gray-500 transition hover:border-green-500 hover:text-green-600"
          >
            <Plus className="h-4 w-4" />
            Tambah Lesson
          </button>
        </div>
      )}
    </div>
  );
}