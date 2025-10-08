import { ReactNode } from 'react';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>
        <div className="container">
          {props.children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
