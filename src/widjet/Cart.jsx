import React, { useEffect, useState } from 'react'
import products from '../data/products.json'
import { TiShoppingCart } from "react-icons/ti"
import { IoClose } from "react-icons/io5"

const Cart = () => {
  const [openCart, setOpenCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(storedCart)
  }, [openCart])

  const getCartProducts = () => {
    const grouped = {}

    cartItems.forEach((item) => {
      if (!grouped[item.productId]) {
        grouped[item.productId] = { ...item }
      } else {
        grouped[item.productId].quantity += item.quantity
      }
    })

    return Object.values(grouped).map((item) => ({
      ...item,
      product: products.find((p) => p.id === item.productId)
    }))
  }

  const handleDelete = (productId) => {
    const updatedCart = cartItems.filter(item => item.productId !== productId)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const emptyCart = () => {
    setCartItems([])
    localStorage.setItem("cart", "[]")
  }

  const cartProducts = getCartProducts()

  const totalAmount = cartProducts.reduce((acc, item) => {
    const price = item.product.priceSale || item.product.price
    return acc + price * item.quantity
  }, 0)

  return (
    <>
      <div className='fixed z-[200] bg-orange-500 text-white bottom-7 right-5 p-5 text-4xl border rounded-full hover:text-5xl duration-200'>
        <button onClick={() => setOpenCart(true)} className='cursor-pointer'>
          <TiShoppingCart />
        </button>
      </div>

      {openCart && (
        <div
          className='fixed inset-0 z-[199] bg-black/50 backdrop-blur-sm flex items-center justify-center'
          onClick={() => setOpenCart(false)}
        >
          <div
            className='bg-white w-[90%] max-w-xl max-h-[90vh] p-6 rounded-xl shadow-lg relative overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-3 right-3 text-3xl text-gray-600 hover:text-black cursor-pointer'
              onClick={() => setOpenCart(false)}
            >
              <IoClose />
            </button>

            <h1 className='text-2xl font-semibold mb-4'>Корзина</h1>

            {cartProducts.length === 0 ? (
              <div className='flex items-center justify-center '>
                <p className='flex text-center items-center justify-center text-3xl font-semibold p-5'>Сделай свой первый
                  <span className='flex font-bold text-4xl  text-orange-500 '>NEAM NEAM</span>

                </p>
              </div>
            ) : (
              <div className='flex flex-col gap-4'>
                {cartProducts.map(({ productId, quantity, product }) => (
                  <div key={productId} className='flex items-center justify-between border-b border-gray-300 pb-2'>
                    <div className='flex gap-4 w-2/3'>
                      <img src={`/images/${product.image}`} alt={product.name}
                        className='w-20 h-22 object-contain rounded-lg' />
                      <div>
                        <p className='font-bold mb-2'>{product.name}</p>
                        {product.priceSale ? (
                          <>
                            <p className='w-[70px] text-center text-white rounded-lg  text-sm bg-red-500'>{product.price} MDL</p>
                            <p className='text-xl font-bold '>{product.priceSale} MDL</p>
                          </>
                        ) : (
                          <p className='text-xl font-bold'>{product.price} MDL</p>
                        )}
                        <p className='text-sm'>x {quantity}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(productId)}
                      className='px-4 py-1 bg-gray-200 rounded-lg hover:bg-red-300 cursor-pointer'
                    >
                      Удалить
                    </button>
                  </div>
                ))}

                <div className='flex justify-between mt-4 text-xl font-bold  pt-4'>
                  <span>Итого:</span>
                  <span>{totalAmount} MDL</span>
                </div>
                <div className='flex items-center justify-center gap-5'>
                  <button
                    onClick={emptyCart}
                    className='mt-4 bg-red-500 text-white px-2 py-3 rounded-lg hover:bg-red-700 cursor-pointer'
                  >
                    Очистить корзину
                  </button>
                  <button className='mt-4 bg-blue-500  text-white px-2 py-3 rounded-lg hover:bg-blue-700 cursor-pointer'>
                    Оформить заказ
                  </button>
                </div>


              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
