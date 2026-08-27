import React from "react";

function Navbar({ children }) {
  return (
    <nav className="sticky top-0 z-10 w-full h-20 border-b border-gray-200 py-3 flex items-center justify-between bg-white">
      {children}
    </nav>
  );
}

export default Navbar;
