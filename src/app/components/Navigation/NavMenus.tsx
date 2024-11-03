import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const menus = [
  { value: 'home', route: 'home' },
  { value: 'services', route: 'services' },
  { value: 'products', route: 'products' },
  { value: 'clients', route: 'clients' },
  { value: 'contact', route: 'contact' },
];

function NavMenus({ className = 'flex gap-12' }: { className?: string }) {
  return (
    <div className={className}>
      {menus.map((b, i) => (
        <NavMenu {...b} key={i} />
      ))}
    </div>
  );
}

export default NavMenus;

export function NavMenu({ value, route }: any) {
  const path = usePathname();
  const scrollToElement = () => {
    const element = document.getElementById(`${route}`);
    const offset = 150; // Offset from the top
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      setTimeout(() => {
        window.scrollTo({ top, behavior: 'smooth' });
      }, 200);
    }
  };
  if (path === '/') {
    return (
      <div onClick={scrollToElement} className="cursor-pointer">
        <h4 className="font-semibold">{value}</h4>
      </div>
    );
  } else {
    return (
      <Link href="/">
        <h4 className="font-semibold" onClick={scrollToElement}>
          {value}
        </h4>
      </Link>
    );
  }
}
