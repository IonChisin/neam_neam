import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../widjet/Cart'
const PageLoyout = () => {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center gap-5 bg-gray-200   px-20 '>
        <Outlet />
      </main>
      <Cart />
      <Footer />

    </> 
  )
}

export default PageLoyout
