'use client';
import React, { useEffect, useState } from 'react';
import SwiperSliderContainer from './SwiperSliderContainer';
import { productsByCategory } from '@/app/utils/utils';

export default function SwiperSlider({ collection }: any) {
  const [products, setProducts] = useState<any>([]);
  const fetchProducts = () => {
    const data = productsByCategory[`${collection}`];
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, [collection]);
  return (
    <div className="max-w-[1200px]">
      <SwiperSliderContainer products={products} />;
    </div>
  );
}
