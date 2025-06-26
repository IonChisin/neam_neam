import React from 'react'
import { Link } from 'react-router';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";


const Footer = () => {
  return (
    <>
      <section className='h-[500px] w-full flex items-center justify-center bg-gray-200 border-t border-gray-500' >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.1768266008306!2d28.858348909338165!3d46.98794886576541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9794cde7c1b3f%3A0x1463dce1bdcd9fcd!2sSTEP%20IT%20Academy%2C%20Botanica!5e0!3m2!1sru!2s!4v1750927054228!5m2!1sru!2s" width="1500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section className='bg-gray-200  '>
        <div className='flex items-center justify-between  bg-gray-200 ms:mt-[25px] lg:ml-12 sm:-mb-[25px] pr-10 rounded-lg '>
          <div className='flex  items-center'>
            <img className='hidden sm:flex h-[150px]' src="logo.png" alt="logo" />
            <div className='hidden lg:flex  items-center text-orange-500     '>
              <span>NEAM</span>
              <span>NEAM</span>
            </div>
          </div >
          <div className='text-center gl:text-5xl ' >
            <span className='font-bold'>часы работы:</span>
            <p className='font-semibold'>Пн.-Вс. <br /> с 11:00 до 01:00</p>
          </div>


          <div className='ml-10'>
            <p className='text-2xl lg:text-4xl font-bold text-gray-700' >Бесплатная доставка</p>
            <p className='text-2xl lg:text-3xl font-semibold'>тел:+373-69-45-44-90</p>
          </div>
          <div className=' lg:flex items-center mr-20 lg:mr-[120px] gap-5'>

            <Link to="https://www.instagram.com/"
              target="_blank"
              className='text-5xl text-orange-500  hover:text-orange-700 cursor-pointer  '><IoLogoInstagram /></Link>

            <Link to="tel:+37312345678"
              className='text-4xl text-orange-500  hover:text-orange-700 cursor-pointer  '><BsFillTelephoneFill /></Link>

          </div>
        </div>

      </section>
    </>
  )
}

export default Footer
