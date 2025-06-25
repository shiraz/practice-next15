import ROUTES from '@/constants/routes';

import NavLink from './NavLink';

export default function MainHeader() {
  const { archive, home, news } = ROUTES;

  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href={home}>NextNews</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href={news}>News</NavLink>
          </li>
          <li>
            <NavLink href={archive}>Archive </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
