'use client';

import React from 'react';
import ItemCard from './ItemCard';

export default function CartPageContainer({ _products, products }: any) {
  return (
    <div className="cart-wrapper">
      <h2>Shopping Cart</h2>

      <div className="cart-container">
        <div className="cart-items">
          {_products.length > 0 &&
            _products.map((p, index) => (
              <ItemCard
                imageUrl={''}
                name={p.name}
                key={index}
                price={p.price}
                _id={p._id}
                quantity={products[index].quantity}
                tags={p.tags}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
