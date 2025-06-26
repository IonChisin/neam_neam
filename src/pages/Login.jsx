import React from 'react'

const Login = () => {
  return (
    <section className='flex-col  left-0 p-5  h-[565px] mt-5'>
        <h2 className='text-4xl font-bold text-orange-500 mb-5 '>Регистрация</h2>
      <form className="flex flex-col gap-2 w-[300px] ">

        <label className='text-xl font-semibold  text-gray-700' for="username">Имя</label>
        <input className='text-center p-2 border border-orange-500 text-gray-700 rounded-lg focus:bg-orange-500 focus:text-white ' type="text" id="username" name="username" required />

        <label className='text-xl font-semibold text-gray-700' for="email">Email</label>
        <input className='text-center p-2 border border-orange-500 rounded-lg text-gray-700 focus:bg-orange-500 focus:text-white ' type="email" id="email" name="email" required />

        <label className='text-xl font-semibold text-gray-700' for="password">Пароль</label>
        <input className='text-center p-2 border border-orange-500 rounded-lg text-gray-700 focus:bg-orange-500 focus:text-white ' type="password" id="password" name="password" required />

        <label className='text-xl font-semibold text-gray-700' for="confirm">Повторите пароль</label>
        <input className='text-center p-2 border border-orange-500 rounded-lg text-gray-700 focus:bg-orange-500 focus:text-white ' type="password" id="confirm" name="confirm" required />

        <button className='p-3 text-lg font-semibold bg-orange-500 rounded-lg mt-5 cursor-pointer hover:bg-orange-700 hover:text-white' type="submit">Зарегистрироваться</button>
      </form>
    </section>
  )
}

export default Login
