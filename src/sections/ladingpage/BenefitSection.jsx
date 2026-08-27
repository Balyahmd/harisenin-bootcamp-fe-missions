import React from "react";

const benefits = [
  {
    title: "Video Interaktif",
    text: "Setiap materi dilengkapi kuis dan latihan agar pemahaman langsung terasah.",
  },
  {
    title: "Mentor Praktisi",
    text: "Belajar langsung dari praktisi aktif di perusahaan teknologi terbaik.",
  },
  {
    title: "Sertifikat Resmi",
    text: "Dapatkan sertifikat kelulusan untuk memperkuat portofolio dan CV Anda.",
  },
  {
    title: "Akses Selamanya & Update Materi Berkala",
    text: "Semua kelas yang Anda beli bisa diakses kapan saja tanpa batas waktu, lengkap dengan pembaruan materi mengikuti perkembangan industri terkini.",
  },
];

function BenefitSection() {
  return (
    <section id="keunggulan" className="scroll-mt-24 px-5 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-xl text-2xl font-extrabold tracking-tight md:text-4xl">
          Belajar tanpa ribet, hasilnya terasa nyata
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`rounded-3xl border border-black/5 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                i === 0 || i === benefits.length - 1
                  ? "bg-[#FFEDE6] md:col-span-2"
                  : "bg-white"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-main-tentiary text-lg font-extrabold text-white">
                {i + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
              <p className="mt-2 max-w-md text-sm text-[#5C5F58]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
