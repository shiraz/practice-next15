'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const className = useMemo(() => {
    return pathname?.startsWith(href) ? 'active' : '';
  }, [pathname, href]);

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
