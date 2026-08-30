import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/icons/logo.png";
import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { id: 1, label: "Kategori", href: "#course" },
  { id: 2, label: "Keunggulan", href: "#keunggulan" },
  { id: 3, label: "Testimoni", href: "#testimoni" },
  { id: 4, label: "FAQ", href: "#faq" },
];

function NavbarLadingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("./login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FFFDF3]/80 backdrop-blur-xl">
      <div className="mx-auto md:mx-20 flex max-w-9xl items-center justify-between px-5 py-4">
        <img
          src={logo}
          alt="logo vidio belajar"
          className="w-40 md:w-60 max-h-14"
        />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-[#5C5F58] transition-colors hover:text-[#20211E]"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={handleLoginClick}
            className="rounded-full bg-main-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Masuk
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Buka menu"
          className="rounded-md p-2 md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#5C5F58]"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={handleLoginClick}
              className="rounded-full bg-main-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Masuk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavbarLadingPage;
