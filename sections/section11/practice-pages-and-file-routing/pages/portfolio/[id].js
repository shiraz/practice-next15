import { useRouter } from 'next/router';
import React from 'react';

export default function IndividualPortfolio() {
  const router = useRouter();
  return <div>Individual Portfolio: {router.query.id}</div>;
}
