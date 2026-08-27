import React from "react";

const testimonials = [
  {
    name: "Amanda",
    role: "Fresh Graduate",
    text: "Materinya ringkas dan langsung praktik. Dua bulan setelah kelas, saya diterima kerja.",
  },
  {
    name: "Fajar Setiawan",
    role: "UMKM Owner",
    text: "Kelas pemasarannya mengubah cara saya beriklan. Omzet naik hampir dua kali lipat.",
  },
  {
    name: "Nabila Putri",
    role: "Junior Designer",
    text: "Suka banget latihan interaktifnya, jadi tahu bagian mana yang belum saya kuasai.",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimoni" className=" scroll-mt-22 px-5 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Kata mereka yang sudah belajar
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <blockquote className="text-base leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main-tentiary-100 text-sm font-bold text-main-tentiary">
                  {t.name[0]}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-[#5C5F58]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
