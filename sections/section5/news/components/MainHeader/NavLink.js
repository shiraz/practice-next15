'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLink({ href, children }) {
  const path = usePathname();

  const getNavLinkClass = (route) => {
    return path.startsWith(route) ? 'active' : '';
  };

  return (
    <Link className={getNavLinkClass(href)} href={href}>
      {children}
    </Link>
  );
}
