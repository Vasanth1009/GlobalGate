import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductSlideCard({ title, thumbnail }: any) {
  return (
    <div className="product-card">
      <Image
        src={thumbnail}
        alt="product"
        loading="lazy"
        width={300}
        height={400}
        className="product-image"
      />
      <p className="product-name">{title}</p>
    </div>
  );
}
