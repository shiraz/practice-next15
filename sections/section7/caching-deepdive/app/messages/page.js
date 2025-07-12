// import { unstable_noStore } from 'next/cache';

import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// The variable name is a dedicated one from Next.js to indicate that this page should be revalidated every 5 seconds (hit the data source every 5 seconds).
// export const revalidate = 5;

// This forces the page to always be dynamic, ignoring any caching.
// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
// export default function MessagesPage() {
  // This is a test to see if the page can be cached without the header. Will have the same effect as force-dynamic.
  // unstable_noStore();
  /*
  const response = await fetch('http://localhost:8080/messages', {
    // headers: {
    //   'X-ID': 'page',
    // },
    next: {
      // revalidate: 5,
      tags: ['msg'], // This will invalidate the cache for this page when a message is added. This is used in conjunction with revalidateTag('msg') in the new message page.
    }
  });
  const messages = await response.json();
  */

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
