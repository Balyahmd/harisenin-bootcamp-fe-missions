import { Slash } from "lucide-react";
import { Link } from "react-router-dom";

function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 font-dm-sans text-base text-dark-primary">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li
              key={`${item.label}-${idx}`}
              className="flex items-center gap-1"
            >
              {idx > 0 && (
                <Slash
                  className="h-4 w-4 shrink-0 -rotate-20 text-dark-secondary"
                  aria-hidden="true"
                />
              )}

              {!isLast && item.href ? (
                <Link
                  to={item.href}
                  className="transition-colors hover:text-dark-primary focus:outline-none focus-visible:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast ? "line-clamp-1 font-medium text-gray-800" : ""
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
