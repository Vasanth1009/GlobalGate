'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';
import Logo from '../Logo';
import NavMenus from './NavMenus';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false);
  const path = usePathname();

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

  return (
    <div
      className={`${
        scrolled
          ? 'bg-opacity-95  top-0 z-50 shadow-md'
          : 'bg-opacity-0'
      } sticky bg-white w-full transition-all duration-200 ease-in-out ${
        path === '/' ? 'h-28' : ''
      }`}
    >
      <div className="m-auto flex flex-col w-full items-center justify-center gap-3">
        <Link
          href="/"
          className={`text-lg font-extrabold flex flex-col justify-center items-center hover:text-primary group transition duration-500`}
        >
          <div>
            <Logo />
          </div>
          <span>GLOBAL GATE</span>
        </Link>
        {path === '/' && (
          <div>
            <NavMenus />
          </div>
        )}
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
