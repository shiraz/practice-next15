import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from '../MainHeaderBackground';
import NavLink from './NavLink';

import classes from './MainHeader.module.css';

import logoImg from '@/assets/logo.png';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <li>
                <NavLink href="/community">Foodies Community</NavLink>
              </li>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
