import React from "react";
import BanerImage from "../../assets/images/banner-image.jpg";

function HeroSection() {
  const handleClickCourse = (action) => {
    document.getElementById("course")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-full overflow-hidden bg-[#20211E]">
        <img
          src={BanerImage}
          alt="Ilustrasi belajar online"
          className="h-120 w-full object-cover md:h-150"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/90" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            Platform belajar video
          </span>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui{" "}
            <span className="text-main-tentiary-400">
              Platform Video Interaktif
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-white/80 md:text-lg">
            Koleksi video pembelajaran berkualitas tinggi, lengkap dengan
            latihan interaktif yang meningkatkan pemahaman Anda.
          </p>

          <button
            onClick={handleClickCourse}
            className="mt-8 rounded-full bg-main-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#3ECF4C]/30 transition-transform hover:scale-105 md:text-base"
          >
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-4">
        {[
          { k: "120+", v: "Kelas video" },
          { k: "35K", v: "Pelajar aktif" },
          { k: "4.8/5", v: "Rating rata-rata" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-black/5 bg-white/70 px-7 py-4 text-center shadow-sm backdrop-blur-md"
          >
            <p className="text-2xl font-extrabold">{s.k}</p>
            <p className="text-xs text-[#5C5F58]">{s.v}</p>
          </div>
        ))}
      </div>

      {/* Brand strip */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
        {[
          "Gojek",
          "Tokopedia",
          "Traveloka",
          "Bukalapak",
          "Shopee",
          "Vidio",
        ].map((n) => (
          <span
            key={n}
            className="text-xl font-extrabold tracking-tight text-[#5C5F58]"
          >
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
