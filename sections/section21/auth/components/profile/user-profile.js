'use client';

// import { getSession, useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';

import ProfileForm from './profile-form';

import classes from './user-profile.module.css';

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // Redirect away if NOT auth.
  // const { data: session, status } = useSession();

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  async function changePwdHandler(pwdData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(pwdData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePwd={changePwdHandler} />
    </section>
  );
}

export default UserProfile;
