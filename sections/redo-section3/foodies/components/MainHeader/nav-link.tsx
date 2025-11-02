'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from '@/styles/components/nav-link.module.css';

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <Link
      href={href}
      className={
        isActive(href) ? `${classes.link} ${classes.active}` : classes.link
      }
    >
      {children}
    </Link>
  );
}
