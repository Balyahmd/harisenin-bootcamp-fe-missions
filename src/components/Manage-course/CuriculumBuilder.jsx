import { Plus } from "lucide-react";
import { useState } from "react";

import CurriculumModule from "./CuriculumModule";

function createLesson() {
  return {
    id: crypto.randomUUID(),
    title: "",
    type: "video",
  };
}

function createModule() {
  return {
    id: crypto.randomUUID(),
    title: "",
    lessons: [],
  };
}

export default function CurriculumBuilder({
  value = [],
  onChange,
}) {
  const [expandedModules, setExpandedModules] = useState([]);

  const toggleModule = (index) => {
    setExpandedModules((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  const updateModules = (callback) => {
    const updated = callback([...value]);
    onChange(updated);
  };

  const addModule = () => {
    const newModule = createModule();

    onChange([...value, newModule]);

    setExpandedModules((current) => [
      ...current,
      value.length,
    ]);
  };

  const deleteModule = (moduleIndex) => {
    const updated = value.filter(
      (_, index) => index !== moduleIndex,
    );

    onChange(updated);
  };

  const updateModuleTitle = (moduleIndex, title) => {
    updateModules((modules) => {
      modules[moduleIndex] = {
        ...modules[moduleIndex],
        title,
      };

      return modules;
    });
  };

  const addLesson = (moduleIndex) => {
    updateModules((modules) => {
      modules[moduleIndex] = {
        ...modules[moduleIndex],
        lessons: [
          ...(modules[moduleIndex].lessons || []),
          createLesson(),
        ],
      };

      return modules;
    });
  };

  const updateLesson = (
    moduleIndex,
    lessonIndex,
    lesson,
  ) => {
    updateModules((modules) => {
      const lessons = [...modules[moduleIndex].lessons];

      lessons[lessonIndex] = lesson;

      modules[moduleIndex] = {
        ...modules[moduleIndex],
        lessons,
      };

      return modules;
    });
  };

  const deleteLesson = (
    moduleIndex,
    lessonIndex,
  ) => {
    updateModules((modules) => {
      const lessons = modules[
        moduleIndex
      ].lessons.filter(
        (_, index) => index !== lessonIndex,
      );

      modules[moduleIndex] = {
        ...modules[moduleIndex],
        lessons,
      };

      return modules;
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Curriculum
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Atur module dan lesson course.
          </p>
        </div>

        <button
          type="button"
          onClick={addModule}
          className="inline-flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-600 transition hover:bg-green-100"
        >
          <Plus className="h-4 w-4" />
          Tambah Module
        </button>
      </div>

      {value.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center">
          <p className="text-sm text-gray-400">
            Belum ada module.
          </p>

          <button
            type="button"
            onClick={addModule}
            className="mt-3 text-sm font-medium text-green-600 hover:text-green-700"
          >
            + Tambah module pertama
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {value.map((module, moduleIndex) => (
            <CurriculumModule
              key={module.id || moduleIndex}
              module={module}
              moduleIndex={moduleIndex}
              expanded={expandedModules.includes(moduleIndex)}
              onToggle={toggleModule}
              onChangeTitle={updateModuleTitle}
              onAddLesson={addLesson}
              onChangeLesson={updateLesson}
              onDeleteLesson={deleteLesson}
              onDeleteModule={deleteModule}
            />
          ))}
        </div>
      )}
    </div>
  );
}