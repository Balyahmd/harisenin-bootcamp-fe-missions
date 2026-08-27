import React from "react";

function CtaSection() {
  return (
    <section className="px-5 pb-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl bg-linear-to-r from-main-tentiary to-[#FF8A5C] p-10 text-center md:p-16">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <h2 className="relative text-2xl font-extrabold tracking-tight text-white md:text-5xl">
          Mulai kelas pertama Anda hari ini
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/85 md:text-lg">
          Ribuan pelajar sudah meningkatkan skill mereka bersama videobelajar.
        </p>
        <a
          href="#course"
          className="relative mt-8 inline-block rounded-full bg-main-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-transform hover:scale-105"
        >
          Lihat Semua Kelas
        </a>
      </div>
    </section>
  );
}

export default CtaSection;
