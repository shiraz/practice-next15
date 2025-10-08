'use client';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

export default function NewMeetupPage() {
  function addMeetupHandler(meetupData: MeetupData) {
    console.log(meetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
