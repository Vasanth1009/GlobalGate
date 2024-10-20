'use client';
import React, { useEffect, useState } from 'react';
import SwiperSliderContainer from './SwiperSliderContainer';

export default function SwiperSlider({ collection }: any) {
  const [products, setProducts] = useState<any>([]);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${collection}`
    );
    const data = await response.json();
    console.log(data);
    setProducts(data.products.slice(0, 7));
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
