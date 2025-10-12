import MeetupList from '@/components/meetups/MeetupList';
import { getAllMeetups } from '@/libs/db';

export default async function HomePage() {
  const meetups = await getAllMeetups();
  
  return <MeetupList meetups={meetups} />;
}
