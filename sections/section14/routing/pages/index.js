import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../utils/api';

function HomePage(props) {
  const { events } = props;
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800, // Revalidate every 30 minutes
  };
}

export default HomePage;
