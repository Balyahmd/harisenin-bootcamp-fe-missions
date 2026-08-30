import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import iconGoogle from "../assets/icons/google-icon.png";
import logo from "../assets/icons/logo.png";
import eyeOff from "../assets/icons/eye-off.png";
import eyeOn from "../assets/icons/eye-on.png";
import flagIndo from "../assets/icons/country-indo.png";
import dropdownIcon from "../assets/icons/dropdown-icon.png";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/beranda");
  }

  function handleRegister() {
    navigate("/register");
  }

  function handleLoginWithGoogle() {
    navigate("/beranda");
  }

  return (
    <>
      <div className="bg-primary-background p-8 md:p-10 my-10 md:my-20 rounded-sm border-gray-100 w-full max-w-lg md:max-w-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold font-popins text-dark-primary mb-1">
            Pendaftaran Akun
          </h1>
          <p className="text-base font-dm-sans text-dark-secondary">
            Yuk, daftarkan akunmu sekarang juga!.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-base text-dark-secondary mb-1 font-normal"
            >
              E-Mail <span className="text-error">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 text-base border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="block md:hidden">
            <label
              htmlFor="select-gender"
              className="block text-sm text-gray-700 mb-1.5"
            >
              Jenis Kelamin <span className="text-error">*</span>
            </label>
            <div className="relative">
              <select
                id="select-gender"
                className="w-full appearance-none border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 bg-white"
              >
                <option>Wanita</option>
                <option>Pria</option>
              </select>
              <img
                src={dropdownIcon}
                alt="dropdown-icon"
                className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="number-phone"
              className="block text-sm text-gray-500 mb-2"
            >
              No. Hp <span className="text-error">*</span>
            </label>

            <div className="flex gap-2 sm:gap-3">
              <div className="relative flex flex-row items-center rounded-md border border-gray-200">
                <div className="bg-base-background w-10 h-11 p-2">
                  <img
                    src={flagIndo}
                    alt="Flag Indonesia"
                    className="w-6 h-6"
                  />
                </div>

                <select className="appearance-none flex items-center border-l border-gray-200  pl-2 pr-6 sm:pr-10 py-3 bg-transparent text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 sm:w-auto">
                  <option value="+62">+62</option>
                  <option value="+60">+60</option>
                  <option value="+65">+65</option>
                  <option value="+61">+61</option>
                  <option value="+1">+1</option>
                </select>

                <img
                  src={dropdownIcon}
                  alt="dropdown-icon"
                  className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>

              <input
                id="number-phone"
                type="tel"
                placeholder=""
                className="flex-1 min-w-0 border border-gray-200 rounded-md px-3 sm:px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-base text-dark-secondary mb-1 font-normal"
            >
              Kata Sandi <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                className="w-full p-3 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 pr-10"
              />
              <button
                onClick={(actionShow) => setShowPassword(!showPassword)}
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <img src={eyeOn} alt="" className="h-6 w-6" />
                ) : (
                  <img src={eyeOff} alt="" className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-base text-dark-secondary mb-1 font-normal"
            >
              Konfirmasi Kata Sandi <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                type={confirmPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                className="w-full p-3 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 pr-10"
              />
              <button
                onClick={(actionShow) => setConfirmPassword(!confirmPassword)}
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {confirmPassword ? (
                  <img
                    src={eyeOn}
                    alt="eye-off-icon"
                    className="h-6 w-6 text-dark-disabled"
                  />
                ) : (
                  <img
                    src={eyeOff}
                    alt="eye-off-icon"
                    className="h-6 w-6 text-dark-disabled"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link
              href="#"
              className="tex-base text-dark-secondary hover:underline"
            >
              Lupa Password?
            </Link>
          </div>

          <div className="space-y-2 pt-2">
            <Button onClick={handleLogin} variant="primary">
              Masuk
            </Button>

            <Button onClick={handleRegister} variant="secondary">
              Daftar
            </Button>
          </div>
        </form>

        <div className="relative my-6 flex items-center justify-center">
          <div className="border-t border-gray-200 w-full"></div>
          <span className="bg-white px-3 text-base text-gray-400 absolute">
            atau
          </span>
        </div>

        <Button
          onClick={handleLoginWithGoogle}
          variant=""
          className="flex items-center justify-center gap-2 border border-primary-border"
        >
          <img src={iconGoogle} alt="" /> Masuk dengan Google
        </Button>
      </div>
    </>
  );
}

export default RegisterPage;
