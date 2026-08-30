import React from 'react'
import NavbarAuth from '../components/Navbar/NavbarAuth'
import MainLayout from './MainLayout'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <>
        <NavbarAuth/>
        <MainLayout>
            <Outlet/>
        </MainLayout>
    </>
  )
}

export default AuthLayout