import React from 'react'
import Product from '../small-components/Protuct'
import products from '../data/products.json'

const Products = () => {
  return (
    <section className='grid grid-cols lg:grid-cols-2 xl:grid-cols-4  justify-center   '>
      {
        products.slice(0, 8).map((category) => (<Product details={category} />))
      }
    </section>
  )
}

export default Products
