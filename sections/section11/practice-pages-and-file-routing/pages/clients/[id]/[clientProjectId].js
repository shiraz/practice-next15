import React from 'react';
import { useRouter } from 'next/router';

export default function SelectedClientProject() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>The Project Page for a specific project for a specific client</div>
  );
}
