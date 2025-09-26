import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import UserProfile from '../../components/profile/user-profile';

export default async function ProfilePage() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/auth');
  }

  return <UserProfile />;
}

// Not supported in App Router.
// export async function getServerSideProps(context) {
//   const { req } = context;

//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
