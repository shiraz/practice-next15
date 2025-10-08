import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://picsum.photos/200/300',
    address: 'Some address 1, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://picsum.photos/200/301',
    address: 'Some address 2, 12345 Some City',
    description: 'This is a second meetup!',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://picsum.photos/200/302',
    address: 'Some address 3, 12345 Some City',
    description: 'This is a third meetup!',
  },
];

export default function HomePage() {
  return <MeetupList meetups={ DUMMY_MEETUPS } />;
}
