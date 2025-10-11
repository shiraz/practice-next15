import MeetupDetail from '@/components/meetups/MeetupDetail';

function MeetupDetailsPage() {
  return (
    <>
      <MeetupDetail
        address="Some address 1, 12345 Some City"
        description="This is a first meetup!"
        image="https://picsum.photos/200/300"
        title="First Meetup"
      />
    </>
  );
};

export default MeetupDetailsPage;