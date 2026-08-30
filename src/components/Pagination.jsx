import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 rounded-xl p-2">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Halaman sebelumnya"
        className="w-10 h-10 flex items-center bg-base-background justify-center rounded-lg text-dark-secondary"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
            p === page
              ? "bg-orange-400 text-white shadow-sm"
              : "text-dark-secondary hover:bg-white"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Halaman berikutnya"
        className="w-10 h-10  bg-base-background flex items-center justify-center rounded-lg text-dark-primary hover:text-neutral-600 "
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default Pagination;
