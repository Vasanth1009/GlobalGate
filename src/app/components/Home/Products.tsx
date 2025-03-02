'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import SwiperSlider from '../Product/SwiperSlider';

export default function Products() {
  const collections = ['kids', 'men', 'women'] as const;
  const [activeCollection, setActiveCollection] = useState<any>('kids');
  return (
    <div className="products-container" id="products">
      <div className="subtitle">
        <span>PRODUCTS</span>
        <h2>Look at Our Selection</h2>
      </div>
      <div className="flex gap-4 text-[clamp(20px,10px_+_2vw,26px)] md:gap-8 justify-center">
        {collections.map((collection, i) => (
          <span
            key={i}
            className={clsx(
              'relative font-medium text-primary cursor-pointer leading-[2] transition-all duration-300 first-letter:uppercase before:absolute before:bottom-0 before:left-1/2 before:h-[4px] before:-translate-x-1/2 before:bg-primary before:transition-all before:duration-300 hover:text-primary hover:before:w-full hover:before:opacity-100',
              {
                'before:w-full before:opacity-100':
                  collection === activeCollection,
                'before:w-0 before:opacity-0': collection !== activeCollection,
              }
            )}
            onClick={() => setActiveCollection(collection)}
          >
            {collection}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <SwiperSlider collection={activeCollection} />
      </div>
    </div>
  );
}
