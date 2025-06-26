import React, { useState } from 'react'
import NewProducts from '../components/NewProducts'
import { useParams, Link } from 'react-router'
import products from '../data/products.json'
import categorys from '../data/categorys.json'
import { FaMinus, FaPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";



const Product = () => {
  const { productSlug } = useParams()
  const product = products.find((prod) => prod.slug === productSlug)

  if (product) {
    const category = categorys.find((cat) => cat.id === product.categoryId)
    const [quantity, setQuantity] = useState(1)
    const [textCart, setTextCart] = useState(false)


    const addToCart = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || []

      const existingProduct = cart.find((cartItem) => cartItem.productId === product.id)
      if (existingProduct) {
        cart = cart.map((cartItem) => {
          if (cartItem.productId === product.id)
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity
            }
          return cartItem
        })
      } else {
        cart.push({
          id: Date.now(),
          productId: product.id,
          quantity: quantity
        })
      }

      localStorage.setItem("cart", JSON.stringify(cart))
      setQuantity(1)
      setTextCart(true)

      setTimeout(() => setTextCart(false), 2000)
    }



    return (
      <>

        <section className='p-10'>
          <div className='flex p-2 gap-4'>
            <h1 className='text-4xl font-bold mb-5 '>{product.name}</h1>
            <Link to={`/category/${category.slug}`}
              className='font-bold h-[30px] text-orange-500 text-center px-2 text-xl border border-orange-500 rounded-lg  hover:bg-orange-500 hover:text-black duration-150'>{category.name}</Link>
          </div>
          <div className='flex flex-col lg:flex-row'>
            <img className='rounded-lg mr-5' src={`/images/${product.image}`} alt={product.name} />
            <div className='flex flex-col'>
              <div className='flex gap-5'>

              </div>
              <div>
                <span className='text-xl font-semibold'>{product.discription}</span>
              </div>
              <div className='flex gap-5 p-2 text-lg border-b border-gray-400'>
                <span>{product.options.pcs}</span>
                <span>{product.options.gram} гр.</span>
              </div>
              <div className='mt-5'>
                {
                  product.priceSale ?
                    (
                      <>
                        <div className='flex gap-5 mt-5'>
                          <span className='text-4xl font-bold '>{product.priceSale} MDL</span>
                          <span className=' h-[28px] text-sm  bg-red-500 text-white p-1 rounded-lg '>{product.price} MDL</span>
                        </div>

                      </>

                    )
                    :
                    (
                      <span className='text-4xl font-bold '>{product.price} MDL</span>
                    )
                }
              </div>


              <div className='flex p-2 h-[75px] mt-5'>
                <button className='p-2 border rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer'
                  onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)} >
                  <FaMinus className='cursor-pointer' />
                </button>
                <input className=' w-[75px] text-3xl text-bold flex text-center justify-center'
                  onChange={(ev) => setQuantity((prev) => ev.target.value !== "" && +ev.target.value > 0 && +ev.target.value <= 20 ? +ev.target.value : "")}
                  onBlur={(ev) => {
                    if (ev.target.value === "") {
                      setQuantity(1)
                    }
                  }}
                  type="number"
                  value={quantity} />
                <button className='p-2 border rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer'
                  onClick={() => setQuantity((prev) => prev < 100 ? prev + 1 : prev)}>
                  <FaPlus className='cursor-pointer' />
                </button>
                <button
                  onClick={addToCart}
                  className='flex px-1 items-center text-5xl ml-5 border text-orange-500 rounded-xl cursor-pointer hover:bg-gray-300'>
                  <span className='text-sm font-bold'>
                    {textCart ?
                      (<span className='flex items-center p-2  text-green-500'>Добавлено <TiShoppingCart className='text-4xl' /> </span>)
                      :
                      (<div><span className='flex '> Добавить <br /> в корзину <TiShoppingCart className='text-4xl' /></span></div>)}

                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <NewProducts />
      </>
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

export default Product
