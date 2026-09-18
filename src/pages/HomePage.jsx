import React, { useState, useMemo } from "react";

import Banner from "../assets/images/banner-image.jpg";
import NewsLatterBanner from "../assets/images/newslatter-banner.jpg";

import Card from "../components/Card";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import SearchFilterBar from "../components/SearchFilterBar";
import SortDropdown from "../components/SortDropdown";

import { CATEGORIES } from "../constants/constats";
import CardSkeleton from "../components/Skeleton/CardSkeleton";
import { useCourseState } from "../hooks/useCourseState";

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
  const [email, setEmail] = useState("");

  const { courses, loading, error } = useCourseState();

  const filtered = useMemo(() => {
    let result =
      active === "Semua Kelas"
        ? courses
        : courses.filter((course) => course.category === active);

    if (searchQuery.trim()) {
      result = result.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()),
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
        result = [...result].sort((a, b) =>
          a.title.localeCompare(b.title),
        );
        break;

      case "Z to A":
        result = [...result].sort((a, b) =>
          b.title.localeCompare(a.title),
        );
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
  }, [courses, active, searchQuery, sortOption]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / ITEMS_PER_PAGE),
  );

  const currentPage = Math.min(page, totalPages);

  const currentCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    return filtered.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    );
  }, [filtered, currentPage]);

  const handleClick = (category) => {
    setActive(category);
    setPage(1);
  };

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setPage(pageNumber);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    console.log("Subscribe:", email);
  };

  const handleClickCourse = () => {
    document
      .getElementById("course-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative w-full overflow-hidden rounded-3xl">
        <img
          src={Banner}
          alt="hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative flex flex-col items-center px-6 py-16 text-center md:px-16 md:py-24">
          <h1 className="max-w-6xl text-3xl font-popins font-extrabold leading-tight text-white md:text-5xl">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>

          <p className="my-6 max-w-5xl text-sm text-gray-200 md:text-base">
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

      <section
        id="course-section"
        className="w-full self-start"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-popins font-semibold text-gray-900 md:text-3xl">
              Koleksi Video Pembelajaran Unggulan
            </h2>

            <p className="mt-2 text-base text-gray-500">
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

        <div className="my-10 flex flex-wrap gap-8 border-gray-200">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              className={`relative pb-2 text-sm font-medium transition-colors md:text-base ${
                active === category
                  ? "text-error"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {category}

              {active === category && (
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-main-tentiary" />
              )}
            </button>
          ))}
        </div>

        {error && (
          <p className="mb-6 text-center text-red-500">
            {error}
          </p>
        )}

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : currentCourses.map((course) => (
                <Card
                  key={course.id}
                  course={course}
                />
              ))}
        </div>

        {!loading && !error && currentCourses.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            Course tidak ditemukan.
          </p>
        )}

        {!loading && filtered.length > 0 && (
          <div className="mt-10 flex justify-end">
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </div>
        )}
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl">
        <img
          src={NewsLatterBanner}
          alt="newsletter background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative flex flex-col items-center px-6 py-16 text-center md:px-16">
          <p className="text-sm font-dm-sans font-semibold tracking-widest text-gray-300">
            NEWSLETTER
          </p>

          <h2 className="my-2 text-2xl font-popins font-bold text-white md:text-4xl">
            Mau Belajar Lebih Banyak?
          </h2>

          <p className="max-w-xl text-sm font-dm-sans text-gray-300 md:text-base">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-10 flex w-full max-w-2xl flex-col gap-4 rounded-xl p-2 shadow-xl md:flex-row md:bg-white"
          >
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="flex-1 rounded-xl border-none bg-white px-6 py-3 text-base outline-none md:py-0"
            />

            <button
              type="submit"
              className="h-12 rounded-xl bg-error px-10 font-semibold text-white transition hover:bg-orange-600 md:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;