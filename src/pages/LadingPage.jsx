import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { courses } from "../datas/course";
import { CATEGORIES } from "../constants/constats";

import Card from "../components/Card";
import Footer from "../components/Footer";

import HeroSection from "../sections/ladingpage/HeroSection";
import BenefitSection from "../sections/ladingpage/BenefitSection";
import TestimonialsSection from "../sections/ladingpage/TestimonialsSection";
import FaqSection from "../sections/ladingpage/FaqSection";
import CtaSection from "../sections/ladingpage/CtaSection";
import { useSelector } from "react-redux";
import ListView from "../components/ListView";
import CardSkeleton from "../components/Skeleton/CardSkeleton";


export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const {courses, loading, error} = useSelector((state) => state.courses) 

  const filtered =
    activeCategory === "Semua Kelas"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <>
      <ListView/>
      <HeroSection />

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

         {loading && (
            <p className="mt-8">
              <CardSkeleton/>
            </p>
          )}

          {error && (
            <p className="mt-8 text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <Card
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <BenefitSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}