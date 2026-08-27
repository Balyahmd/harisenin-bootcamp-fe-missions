import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function NotFoundPage() {
  return (
    <>
      <Navbar>
        <img
          src={logo}
          alt="logo vidio belajar"
          className="w-40 md:w-60 max-h-14 mx-10 md:mx-20"
        />
      </Navbar>
      <MainLayout>
        <div className="text-center gap-3">
          <h1 className="text-main-primary text-popins text-8xl font-bold">
            404
          </h1>
          <h3 className="text-3xl font-bold text-gray-900 py-3">
            Halaman Tidak Ditemukan
          </h3>
          <p className="text-gray-500 text-sm md:text-base text-center">
            Maaf, halaman yang Anda cari tidak tersedia atau mungkin sudah
            dipindahkan. Yuk kembali dan lanjutkan belajar!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center">
          <Link
            to="/"
            className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold px-6 py-3 rounded-md text-sm"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </MainLayout>
    </>
  );
}

export default NotFoundPage;
