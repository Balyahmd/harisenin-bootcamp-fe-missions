import React from "react";
import NavbarLadingPage from "../components/Navbar/NavbarLadingPage";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function LadingPageLayout() {
  return (
    <div id="top" className="min-h-screen bg-[rgb(255,253,243)] text-[#20211E]">
      <NavbarLadingPage />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LadingPageLayout;
