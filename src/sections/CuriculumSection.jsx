import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import LessonRow from "../components/LessonRow";

function CurriculumSection({ section, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((currentOpen) => !currentOpen)}
        className="flex w-full items-center justify-between rounded py-4 text-left font-popins text-lg font-semibold text-main-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        aria-expanded={open}
      >
        <span>{section.title}</span>

        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className="space-y-2 pb-2">
          {section.lessons.map((lesson) => (
            <LessonRow key={lesson.title} {...lesson} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CurriculumSection;
