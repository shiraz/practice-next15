import AuthSessionProvider from '../providers/session-provider';

import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <>
      <AuthSessionProvider>
        <MainNavigation />
        <main>{props.children}</main>
      </AuthSessionProvider>
    </>
  );
}

export default Layout;
