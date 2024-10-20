'use client';

import React, { useState } from 'react';

export default function ProductDetails({
  _id,
  name,
  tags,
  price,
}: {
  _id: string;
  name: string;
  tags: string;
  price: number;
}) {
  const [quantity, setQuantity] = useState(1);
  function handleQuantityChange(change: 'increase' | 'decrease') {
    if (change === 'increase') {
      setQuantity((q) => q + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity((q) => q - 1);
      }
    }
  }
  return (
    <div className="product-details">
      <div className="name-and-category">
        <h3>{name}</h3>
        <span>{tags}</span>
      </div>
    </div>
  );
}
