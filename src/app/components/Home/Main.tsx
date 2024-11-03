import Image from 'next/image';
import React from 'react';
// import FeaturedOne from '/public/Featured1.webp';
// import FeaturedTwo from '/public/Featured2.webp';
// import FeaturedThree from '/public/Featured3.webp';
// import FeaturedFour from '/public/Featured4.webp';
import HeaderImage from '/public/ourservices.png';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="header" id="home">
      <div className="header-left-side">
        <div className="header-content">
          <h1 className="header-main-heading mt-5">Elevate Your Style</h1>
          <p className="header-main-helper-text">
            Discover Your Unique Style with Our Curated Collection of Fashion
            Forward Pieces.
          </p>
        </div>
      </div>
      <div className="header-right-side">
        <div className="header-circle">
          <Image
            src={HeaderImage}
            alt="header"
            height="550"
            width="550"
            className="header-image"
          />
        </div>
      </div>
    </header>
  );
}
