import { FileText, CirclePlay, Clock } from "lucide-react";

function LessonRow({ title, type = "video", duration }) {
  const formattedDuration = `${duration} Menit`;

  const ContentIcon = type === "video" ? CirclePlay : FileText;
  const contentLabel = type === "video" ? "Video" : "Dokumen";

  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white p-5">
      <span className="truncate font-dm-sans font-medium text-base text-dark-primary">
        {title}
      </span>

      <div className="flex shrink-0 items-center gap-5 text-base font-dm-sans text-dark-secondary">
        <span className="flex items-center gap-1.5">
          <ContentIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {contentLabel}
        </span>

        <span className="flex items-center gap-1.5 text-dark-secondary">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {formattedDuration}
        </span>
      </div>
    </div>
  );
}

export default LessonRow;
