import { useState } from "react";
import Facebook from "../assets/icons/facebook-icon.png";
import Instagram from "../assets/icons/instagram-icon.png";
import Linkedin from "../assets/icons/linkedin-icon.png";
import Twitter from "../assets/icons/twiter-icon.png";
import logo from "../assets/icons/logo.png";
import chevronDown from "../assets/icons/dropdown-icon.png";
import ChevronRight from "../assets/icons/chevron-right.png";

import { Link } from "react-router-dom";

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const socials = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  const footerSections = [
    {
      title: "Kategori",
      items: [
        "Digital & Teknologi",
        "Pemasaran",
        "Manajemen Bisnis",
        "Pengembangan Diri",
        "Desain",
      ],
    },
    {
      title: "Perusahaan",
      items: [
        "Tentang Kami",
        "FAQ",
        "Kebijakan Privasi",
        "Ketentuan Layanan",
        "Bantuan",
      ],
    },
    {
      title: "Komunitas",
      items: ["Tips Sukses", "Blog"],
    },
  ];

  return (
    <footer className="w-full bg-white px-6 py-10 md:px-16 font-dm-sans">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-10">
        <div>
          <img
            src={logo}
            alt="logo vidio belajar"
            className="max-h-14 w-auto -ml-5"
          />
          <p className="mt-6 text-sm md:text-lg font-semibold text-dark-primary">
            Gali Potensi Anda Melalui Pembelajaran <br />
            Video di hariesok.id!
          </p>

          <p className="mt-4 text-sm md:text-base text-dark-primary">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="text-sm md:text-base text-dark-primary">
            +62-877-7123-1234
          </p>
        </div>

        <div className="flex flex-col md:hidden divide-y divide-gray-100">
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <button
                type="button"
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between py-3 text-left text-base font-semibold text-dark-primary"
              >
                {section.title}
                {openIndex === index ? (
                  <img src={chevronDown} alt="chevron down" />
                ) : (
                  <img src={ChevronRight} alt="chevron right" />
                )}
              </button>

              {openIndex === index && (
                <ul className="pb-3 space-y-4">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-dark-primary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex md:gap-2">
          {footerSections.map((section) => (
            <div key={section.title} className="flex-1">
              <h4 className="mb-3 text-sm md:text-base font-semibold text-dark-primary">
                {section.title}
              </h4>
              <ul className="space-y-2 space-x-12">
                {section.items.map((item) => (
                  <li key={item} className="whitespace-nowrap">
                    <Link
                      href="#"
                      className="text-base text-dark-primary hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-2 md:my-8 border-gray-200" />

      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex gap-3 order-2 md:order-1">
          {socials.map((social) => (
            <Link
              key={social.name}
              to={social.href}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <img src={social.icon} alt={social.name} className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <p className="text-sm md:text-base text-dark-secondary order-1 md:order-2">
          @2023 Gerobak Sayur All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
