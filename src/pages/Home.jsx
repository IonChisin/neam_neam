import React from 'react'
import Category from '../components/Categorys'
import Products from '../components/Products'
import Swiper from '../components/Swiper'
import NewProducts from '../components/NewProducts'

const Home = () => {
  return (
    <>
      <Category />
      <NewProducts />
      <Swiper />
      <Products />
    </>
  )
}

export default Home
