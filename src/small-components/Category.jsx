import React from 'react'
import { Link } from 'react-router'


const Category = ({ details }) => {

  return (
    <Link
      to={`/category/${details.slug}`}
      className='flex flex-col items-center gap-5 hover:scale-120 duration-150'>
      <img className='h-[75px] w-[75px] ' src={`categorys/${details.image}`} alt={details.name} loading="lazy" />
      <span className='font-bold text-orange-500 px-2 py-1 border rounded-lg '>{details.name}</span>
    </Link>

  )
}

export default Category
