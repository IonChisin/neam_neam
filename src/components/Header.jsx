import React, { useState } from 'react'
import { Link } from 'react-router'
import { LuLogIn } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";

const Header = () => {

  const [openLogin, setopenLogin] = useState(false);


  return (
    <header className='flex border-b border-orange-500 items-center justify-between px-10 bg-gray-200 lg:bg-orange-500 text-white '>
      <div>
        <span className='text-4xl font-bold  '>
          <Link to="/"
            className='flex items-center'>
            <div className='flex items-center  bg-gray-200 ms:mt-[25px] lg:ml-12 sm:-mb-[25px] pr-10 rounded-lg '>
              <img className='hidden sm:flex h-[150px]' src="logo.png" alt="logo" />
              <div className='flex flex-col items-center text-orange-500     '>
                <span>NEAM</span>
                <span>NEAM</span>
              </div>

            </div>
          </Link>
        </span>
      </div>
      <span className='hidden lg:flex text-2xl font-semibold'>От суши до бургеров — доставим с любовью</span>
      <nav className=' mr-[50px]'>
        <ul className='flex items-center text-xl font-semibold gap-5'>
          <li >
            <Link to="https://www.instagram.com/"
              target="_blank"
              className='text-5xl text-orange-500 lg:text-gray-100 hover:text-orange-700 cursor-pointer  '><IoLogoInstagram /></Link>
          </li>
          <li >
            <Link to="tel:+37312345678"
              className='text-4xl text-orange-500 lg:text-gray-100 hover:text-orange-700 cursor-pointer  '><BsFillTelephoneFill /></Link>
          </li>
          <li>
            <button onClick={(() => setopenLogin(!openLogin))}
              className='cursor-pointer text-orange-500 mr-[50px] lg:text-gray-200 text-5xl hover:text-orange-700 '>
              <LuLogIn />
            </button>
          </li>
        </ul>
      </nav>
      {openLogin && (
        <div
          className='fixed inset-0 z-[199] bg-black/50 bg-opacity-40 backdrop-blur-sm flex items-center justify-center'
          onClick={() => setopenLogin(false)}>
          <div
            className='bg-white w-[90%] max-w-xl h-[500px] p-6 rounded-xl shadow-lg relative'
            onClick={(e) => e.stopPropagation()}>
            <button
              className='absolute top-3 right-3 text-3xl text-gray-600 hover:text-black cursor-pointer'
              onClick={() => setopenLogin(false)}
            >
              <IoClose />
            </button>
            <div className=' flex flex-col gap-5'>
              <h1 className='text-3xl font-bold text-black mb-20'>Вход</h1>
              <form action="login"
                className='flex flex-col gap-2 '>
                <input type="text" placeholder="Логин" id='login' className='flex items-center justify-center text-gray-700 border  border-orange-500 px-7 py-3 rounded-lg' />
                <input type="password" placeholder='Пароль' id='password' className=' flex items-center justify-center text-gray-700 border border-orange-500 px-5 py-3 rounded-lg ' />
                <button className='w-full px-3 py-2 border-hidde bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-700 hover:text-white text-lg' >Войти</button>
                <button className='w-full p-2 border-hidden bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white text-lg'>Регистрация</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


export default Header
