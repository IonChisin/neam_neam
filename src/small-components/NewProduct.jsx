import React from 'react'
import { Link } from 'react-router'
import { TiShoppingCart } from "react-icons/ti";

const NewProduct = ({ newPro }) => {
  
  return (
    <Link to=""
    className=' justify-center gap-3'>
      <img className='h-[350px] w-full rounded-t-lg '
        src={`/images/${newPro.image}`} alt={newPro.name} loading='lazy' />
      <div className='flex gap-5'>
      <div className='flex gap-2 mt-2'>
        <span className='ml-1 text-2xl font-semibold lg:whitespace-nowrap'>{newPro.name}</span>
        <sub className='flex  text-[15px] text-orange-500  '>Новика</sub>
      </div>
</div>
    </Link>
  )
}

export default NewProduct
