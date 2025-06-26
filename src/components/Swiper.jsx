import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import slider from '../data/slider.json'
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = () => {
  return (
    <>
<div className="w-full  ">
    <h1 className='text-5xl font-semibold mb-5'>Акция</h1>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-auto rounded-lg flex "
        autoplay={{ delay: 3500 }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        direction="horizontal"
      >
        {slider[0].swiper.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/images/slider/${img}`}
              alt={`slide-${index}`}
              className="w-full h-auto "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      
    </>
  )
}

export default swiper
