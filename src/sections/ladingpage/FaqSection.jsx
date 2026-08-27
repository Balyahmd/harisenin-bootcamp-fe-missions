import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    q: "Apakah kelas bisa diakses selamanya?",
    a: "Ya, setelah membeli kelas Anda mendapatkan akses seumur hidup termasuk pembaruan materi.",
  },
  {
    q: "Apakah ada sertifikat setelah lulus?",
    a: "Ada. Sertifikat otomatis terbit setelah Anda menyelesaikan seluruh modul dan latihan akhir.",
  },
  {
    q: "Bagaimana metode pembayarannya?",
    a: "Tersedia transfer bank, e-wallet, kartu kredit, dan cicilan 0% untuk kelas tertentu.",
  },
];

function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="scroll-mt-22 px-5 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Pertanyaan yang sering diajukan
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold md:text-base"
              >
                {f.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-main-tentiary transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <p className="px-5 pb-5 text-sm text-[#5C5F58]">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
