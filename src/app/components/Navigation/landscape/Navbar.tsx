'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';
import Logo from '../../Logo';
import NavMenus from './NavMenus';

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      setDidMount(false);
    };
  }, [handleScroll]);

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!didMount) {
    return null;
  }

  return (
    <div
      className={`${
        scrolled
          ? 'bg-white sticky top-0 z-50 shadow-md'
          : 'bg-transparent relative'
      } w-full transition-all duration-200 ease-in-out h-28`}
    >
      <div className="m-auto flex flex-col w-full items-center justify-center gap-3">
        <div
          className={`text-lg font-extrabold flex flex-col justify-center items-center hover:text-primary group transition duration-500`}
        >
          <div>
            <Logo />
          </div>
          <span>GLOBAL GATE</span>
        </div>
        <div>
          <NavMenus />
        </div>
      </div>
      <div className="fixed bottom-20 right-4">
        {scrolled && (
          <div
            onClick={scrollToTop}
            className="w-14 h-14 flex justify-center items-center rounded-xl bg-primary text-white hover:bg-secondary shadow-md transition-all"
          >
            <FaLongArrowAltUp size={30} />
          </div>
        )}
      </div>
    </div>
  );
}
