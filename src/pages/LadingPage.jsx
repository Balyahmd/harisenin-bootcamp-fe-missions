import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { courses } from "../datas/course";
import { CATEGORIES } from "../constants/constats";

import Card from "../components/Card";
import Footer from "../components/Footer";

import logo from "../assets/icons/logo.png";
import HeroSection from "../sections/ladingpage/HeroSection";
import BenefitSection from "../sections/ladingpage/BenefitSection";
import TestimonialsSection from "../sections/ladingpage/TestimonialsSection";
import FaqSection from "../sections/ladingpage/FaqSection";
import CtaSection from "../sections/ladingpage/CtaSection";

import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { id: 1, label: "Kategori", href: "#course" },
  { id: 2, label: "Keunggulan", href: "#keunggulan" },
  { id: 3, label: "Testimoni", href: "#testimoni" },
  { id: 4, label: "FAQ", href: "#faq" },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");

  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("./login");
  }

  const filtered =
    activeCategory === "Semua Kelas"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <div id="top" className="min-h-screen bg-[rgb(255,253,243)] text-[#20211E]">
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

      <HeroSection />

      {/* Courses */}
      <section id="course" className=" scroll-mt-22 px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight md:text-4xl">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="mt-3 text-[#5C5F58] md:text-lg">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === c
                    ? "bg-main-tentiary text-white shadow-md shadow-main-tentiary/30"
                    : "border border-black/5 bg-white text-[#5C5F58] hover:text-[#20211E]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <BenefitSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
