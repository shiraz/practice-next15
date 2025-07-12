import { getMessages } from "@/lib/messages";

export default async function MessagesLayout({ children }) {
  /*
  const response = await fetch('http://localhost:8080/messages', {
    // Request memoization test. Removing the header from here and in the page.js file returns
    // a single cached response for both the layout and page.
    // This means that the layout and page share the same cache entry.
    // headers: {
    //   'X-ID': 'layout',
    // },
  });
  const messages = await response.json();
  */

  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
