'use client';

import { useRouter } from 'next/navigation';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import type MeetupData from '@/types/MeetupData';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(meetupData: MeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.info('Response from /api/new-meetup:', data);

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
