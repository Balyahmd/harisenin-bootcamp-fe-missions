import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchFilterBar({
  placeholder = "Cari...",
  onSearchChange,
  className = "",
}) {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange?.(value);

    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 500);
  };

  return (
    <div
      className={`flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 ${className}`}
    >
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 border-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none"
      />
      <Search size={18} className={`text-gray-400 transition-opacity ${isSearching ? "animate-pulse" : ""}`} />
    </div>
  );
}
