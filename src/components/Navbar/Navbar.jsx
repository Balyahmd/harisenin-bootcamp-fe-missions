import React from "react";

function Navbar({ children }) {
  return (
    <header className="sticky top-0 z-10 w-full h-20 border-b border-gray-200 bg-white">
      <nav className="h-full flex items-center justify-between  md:px-5">
        {children}
      </nav>
    </header>
  );
}

export default Navbar;
