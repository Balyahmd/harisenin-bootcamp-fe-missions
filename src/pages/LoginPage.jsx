import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconGoogle from "../assets/icons/google-icon.png";

import eyeOff from "../assets/icons/eye-off.png";
import eyeOn from "../assets/icons/eye-on.png";
import Button from "../components/Button";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
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
            Masuk ke Akun
          </h1>
          <p className="text-base font-dm-sans text-dark-secondary">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-base text-dark-secondary mb-1 font-medium"
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

          <div>
            <label
              htmlFor="password"
              className="block text-base text-dark-secondary mb-1 font-medium"
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
                type="button"
                onClick={(actionShow) => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <img src={eyeOn} alt="eye-on-icon" className="h-6 w-6" />
                ) : (
                  <img src={eyeOff} alt="" className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link
              href="#"
              className="text-base text-dark-secondary hover:underline"
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

export default LoginPage;
