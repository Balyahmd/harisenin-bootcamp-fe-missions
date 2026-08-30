import React, { useState, useMemo, useEffect} from "react";
import Banner from "../assets/images/banner-image.jpg";
import NewsLatterBanner from "../assets/images/newslatter-banner.jpg";
import Card from "../components/Card";

import { courses } from "../datas/course";
import Button from "../components/Button";

import Pagination from "../components/Pagination";
import SearchFilterBar from "../components/SearchFilterBar";
import SortDropdown from "../components/SortDropdown";

import { CATEGORIES } from "../constants/constats";
import CardSkeleton from "../components/Skeleton/CardSkeleton";

const ITEMS_PER_PAGE = 9;

const SORT_OPTIONS = [
  "Harga Rendah",
  "Harga Tinggi",
  "A to Z",
  "Z to A",
  "Rating Tertinggi",
  "Rating Terendah",
];

function HomePage() {
  const [active, setActive] = useState(CATEGORIES[0]);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[0]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(true);

  const filtered = useMemo(() => {
    let result =
      active === "Semua Kelas"
        ? courses
        : courses.filter((c) => c.category === active);

    if (searchQuery.trim()) {
      result = result.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    switch (sortOption) {
      case "Harga Rendah":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "Harga Tinggi":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "A to Z":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z to A":
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Rating Tertinggi":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "Rating Terendah":
        result = [...result].sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    return result;
  }, [active, searchQuery, sortOption]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);

  const currentCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const handleClick = (cat) => {
    setActive(cat);
    setPage(1);
  };

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribe:", email);
  };

  const handleClickCourse = (action) => {
    document
      .getElementById("course-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative rounded-3xl overflow-hidden w-full ">
        <img
          src={Banner}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative px-6 md:px-16 py-16 md:py-24 text-center flex flex-col items-center">
          <h1 className="text-white font-popins font-extrabold text-3xl md:text-5xl leading-tight max-w-6xl">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="text-gray-200 my-6 max-w-5xl text-sm md:text-base">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <Button
            onClick={handleClickCourse}
            variant="primary"
            className="max-w-md py-3"
          >
            Temukan Video Course untuk Dipelajari!
          </Button>
        </div>
      </section>

      <section id="course-section" className="self-start gap-10 w-full">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-popins md:text-3xl font-semibold text-gray-900">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="text-gray-500 text-base mt-2">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SortDropdown
              options={SORT_OPTIONS}
              onChange={(option) => setSortOption(option)}
            />
            <SearchFilterBar
              placeholder="Cari Kelas"
              onSearchChange={(query) => setSearchQuery(query)}
              className="w-56"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 border-gray-200 my-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`relative pb-2 text-sm md:text-base font-medium transition-colors ${
                active === cat
                  ? "text-error"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {cat}
              {active === cat && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-main-tentiary rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div
          id="course-section"
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
           {loading
            ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            : currentCourses.map((course) => (
                <Card key={course.id} course={course} />
              ))}
        </div>
        <div className="flex justify-end mt-10">
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </div>
      </section>

      <section className="relative rounded-3xl overflow-hidden w-full">
        <img
          src={NewsLatterBanner}
          alt="newsletter background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative px-6 md:px-16 py-16 text-center flex flex-col items-center">
          <p className="text-gray-300 font-dm-sans text-sm tracking-widest font-semibold">
            NEWSLETTER
          </p>
          <h2 className="text-white font-popins font-bold text-2xl md:text-4xl my-2">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="text-gray-300 font-dm-sans max-w-xl text-sm md:text-base">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <form
            onSubmit={handleSubscribe}
            className="mt-10 flex w-full max-w-2xl flex-col gap-4 rounded-xl md:bg-white p-2 shadow-xl md:flex-row"
          >
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-3 md:py-0 rounded-xl border-none px-6 text-base outline-none bg-white"
            />

            <button className="h-12 rounded-xl bg-error px-10 font-semibold text-white transition hover:bg-orange-600 md:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
