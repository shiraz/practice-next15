import { redirect } from 'next/navigation';
import { revalidatePath, revalidateTag } from 'next/cache';

import { addMessage } from '@/lib/messages';

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);
    // This will revalidate the messages page to show the new message immediately.
    // revalidatePath('/messages'); 
    // This will revalidate the messages layout to show the new message immediately.
    // revalidatePath('/messages', 'layout'); 
    // This will revalidate the messages layout and page to show the new message immediately. This is used in conjunction with the `getMessages` function in the messages.js file that has the `nextCache` tag set to 'msg'.
    revalidateTag('msg'); 
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
