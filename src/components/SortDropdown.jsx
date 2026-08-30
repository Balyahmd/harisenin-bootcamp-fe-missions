import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

export default function SortDropdown({
  options = [],
  defaultOption,
  label = "Urutkan",
  onChange,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultOption ?? options[0]);

  const optionsWithState = useMemo(
    () =>
      options.map((option) => ({
        label: option,
        isActive: option === selected,
      })),
    [options, selected],
  );

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  if (options.length === 0) return null;

  return (
    <div
      className={`relative ${className}`}
      tabIndex={-1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 hover:border-gray-300"
      >
        {label}
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-10 mt-2 w-48 rounded-xl border border-gray-100 bg-white py-2 shadow-lg"
        >
          {optionsWithState.map(({ label: optionLabel, isActive }) => (
            <button
              type="button"
              key={optionLabel}
              role="option"
              aria-selected={isActive}
              onClick={() => handleSelect(optionLabel)}
              className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                isActive
                  ? "font-semibold text-gray-900"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {optionLabel}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

