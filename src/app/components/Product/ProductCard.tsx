import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }: any) {
  return (
    <div className="Allproduct-card">
      <Image alt={product.name} src={''} width="250" height="270" />
      <div className="Allproduct-name">{product.name}</div>
    </div>
  );
}
