import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import newProducts from '../data/newProducts.json';
import NewProduct from '../small-components/NewProduct';

const NewProducts = () => {
  return (
    <section className="w-full flex flex-col justify-center">
      <h1 className='text-5xl font-semibold mb-5'>Новинки</h1>
      <Swiper
        spaceBetween={30}
        modules={[ Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1224: {
            slidesPerView: 3,
          },
          1824: {
            slidesPerView: 4,
          },
        }}
        className="flex items-center justify-center w-full h-[450px] "
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product.id || product.name}>
            <NewProduct newPro={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewProducts;
