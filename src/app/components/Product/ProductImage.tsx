'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductImage({
  image,
  name,
}: {
  image: any[];
  name: string;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="product-images">
      <div className="small-images-container">
        {image?.map((item, index) => (
          <Image
            key={index}
            src={''}
            alt={name}
            onMouseEnter={() => setImgIndex(index)}
            width={278}
            height={296}
          />
        ))}
      </div>
      <div className="big-image-container">
        <Image src={''} alt={name} width={278} height={296} />
      </div>
    </div>
  );
}
