'use client';

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductSlideCard from './ProductSlideCard';

export default function SwiperSliderContainer({ products }: any) {
  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1260: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      modules={[Navigation, A11y]}
      spaceBetween={0}
      navigation
    >
      <div className="products-container">
        {products?.map(({ title, thumbnail }, index) => (
          <SwiperSlide key={index}>
            <ProductSlideCard thumbnail={thumbnail} title={title} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
