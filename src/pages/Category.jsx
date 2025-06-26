import React from 'react'
import { useParams } from 'react-router'
import categorys from '../data/categorys.json'
import products from '../data/products.json'
import Protuct from '../small-components/Protuct'
import { useTranslation } from 'react-i18next';


const Category = () => {
  const { categorySlug } = useParams()

  const category = categorys.find((cat) => cat.slug === categorySlug)

  if (category) {
    const filteredProducts = products.filter((prod)=> prod.categoryId === category.id)
return(
<section>
<div className='flex items-center  gap-5 p-5'>
  <img src={`/categorys/${category.image}`} alt={category.name} />
  <h1 className='lg:text-2xl font-bold text-gray-700'>{category.discription}</h1>
</div>
<div className='grid grid-cols sm:grid-cols-2 xl:grid-cols-4'>
  {
    filteredProducts.map((prod) => <Protuct details={prod} /> )
      }
</div>
</section>
)
  }
  else {
    return (
      <div>
        <h1>404</h1>
        <p>Category not found</p>
      </div>
    )
  }
}

export default Category
