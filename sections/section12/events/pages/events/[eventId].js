import { useRouter } from 'next/router';

import ErrorAlert from '../../components/ui/error-alert';
import EventContent from '../../components/events/event-detail/event-content';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventSummary from '../../components/events/event-detail/event-summary';

import { getEventById } from '../../dummy-data';

export default function Event() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Event not found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
