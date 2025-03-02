'use client';
import React, { useEffect, useState } from 'react';
import SwiperSliderContainer from './SwiperSliderContainer';
import { productsByType } from '../../utils/utils';

export default function SwiperSlider({ collection }: any) {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    const data = productsByType[`${collection}`];
    setProducts(data);
  }, [collection]);
  return (
    <div className="max-w-[1200px]">
      <SwiperSliderContainer products={products} />;
    </div>
  );
}
