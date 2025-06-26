import React from 'react'
import categorys from '../data/categorys.json'
import Category from '../small-components/Category'

const Categorys = () => {
  return (
    <section className='grid grid-cols-2 sm:grid-cols-4 pt-5 gap-20  xl:flex items-center justify-center bg-gray-200  '>
      {
        categorys.map((category) => (<Category details={category} />))
      }
    </section>
  )
}

export default Categorys
