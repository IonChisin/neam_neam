import React from 'react'
import { Link } from 'react-router'
import categorys from '../data/categorys.json'
import { TiShoppingCart } from "react-icons/ti";


const Protuct = ({ details }) => {

  const category = categorys.find((category) => category.id === details.categoryId)

  return (
    <Link
      to={`/product/${details.slug}`}
      className='flex flex-col items-center justify-center pb-5 h-auto  w-[350px] m-5 rounded-lg bg-white   gap-5'>
      <img className='object-contain h-[200px]  rounded-lg mt-2 ' src={`/images/${details.image}`} alt={details.name} loading="lazy" />
      <span className='flex text-center px-1 text-xl font-semibold text-gray-700'>{details.name}</span>
      <div className=''>
        {
          details.priceSale ?
            (
              <>
                <span className='text-2xl font-bold  mr-2  ' >{details.priceSale} lei</span>
                <span className='h-[28px] text-[14px] bg-red-400  p-1 rounded-lg line-through  '>{details.price} lei</span>
              </>

            )
            :
            (
              <span className='font-bold text-xl'>{details.price} lei</span>
            )
        }
      </div>
      <div className='flex  items-center'>
        <div className='flex px-2 py-1 border rounded-tl-lg rounded-bl-lg'>
          <button className='flex items-center gap-2 text-2xl font-semibold cursor-pointer'>Хочу
            <span className='text-4xl text-orange-500'><TiShoppingCart /></span>
          </button>
        </div>
        <span className='font-bold text-orange-500 p-2 text-xl border border-orange-500 rounded-tr-lg rounded-br-lg hover:bg-orange-500 hover:text-black duration-150'>{category.name}</span>
      </div>

    </Link>

  )
}

export default Protuct
