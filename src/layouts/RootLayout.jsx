import React from "react";
import MainLayout from "./MainLayout";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AppNavbar from "../components/Navbar/AppNavbar";

function RootLayout() {
  return (
    <>
      <AppNavbar />

      <MainLayout>
        <Outlet />
      </MainLayout>

      <Footer />
    </>
  );
}

export default RootLayout;
