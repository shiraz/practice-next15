'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { DUMMY_NEWS } from '@/constants/dummy-news';

export default function InterceptedImage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  const router = useRouter();

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />;
        </div>
      </dialog>
    </>
  );
}
