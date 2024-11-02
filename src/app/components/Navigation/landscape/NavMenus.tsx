import Link from 'next/link';
import React from 'react';

const Btns = [
  { value: 'all products', route: 'all-products' },
  { value: 'women', route: 'women' },
  { value: 'men', route: 'men' },
  { value: 'kids', route: 'kids' },
  { value: 'activewear', route: 'activewear' },
  { value: 'accessories', route: 'accessories' },
];

function NavMenus({ className = 'flex gap-12' }: { className?: string }) {
  return (
    <div className={className}>
      {Btns.map((b, i) => (
        <NavMenu {...b} key={i} />
      ))}
    </div>
  );
}

export default NavMenus;

export function NavMenu({ value, route }: any) {
  return (
    <Link href={`/products/${route}`}>
      <h4 className="font-semibold">{value}</h4>
    </Link>
  );
}
