import React, { useState } from "react";
import logo from "../../assets/icons/logo.png";
import Navbar from "./Navbar";
import AvatarProfile from "../../assets/images/avatar-profile.png";

import IconMenu from "../../assets/icons/menu-icon.png";
import IconLogout from "../../assets/icons/logout-icon.png";
import { Link, useNavigate } from "react-router-dom";

import { MENU_ITEMS } from "../../constants/constats";
import { X } from "lucide-react";

function AppNavbar() {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = (action) => {
    navigate("/login");
  };

  return (
    <Navbar>
      <img
        src={logo}
        alt="logo vidio belajar"
        className="w-40 md:w-60 max-h-14 mx-10 md:mx-20"
      />

      <div className="hidden md:flex items-center-safe mx-20 gap-6 relative">
        <p className="font-md-sans font-medium text-dark-disabled">Kategori</p>

        <button onClick={() => setDropdownOpen((v) => !v)}>
          <img
            src={AvatarProfile}
            alt="avatar header"
            className="w-11 h-11 rounded-md"
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden z-20">
            {MENU_ITEMS.slice(1).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogOut}
              className="w-full flex items-center px-4 py-3 gap-3 text-sm text-orange-500 font-medium hover:bg-orange-50"
            >
              Keluar{" "}
              <img src={IconLogout} alt="icon-logout" className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => setMobileMenuOpen((v) => !v)}
        className="md:hidden p-2 mx-10 text-gray-700"
        aria-label="Buka menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <img src={IconMenu} alt="menu" className="w-6 h-6" />
        )}
      </button>

      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-gray-200 z-20">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-4 py-4 text-sm text-gray-700 border-b border-gray-100"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogOut}
            className="w-full flex items-center px-4 py-4 gap-2 text-sm text-orange-500 font-medium"
          >
            Keluar{" "}
            <img src={IconLogout} alt="icon-logout" className="w-5 h-5" />
          </button>
        </div>
      )}
    </Navbar>
  );
}

export default AppNavbar;
