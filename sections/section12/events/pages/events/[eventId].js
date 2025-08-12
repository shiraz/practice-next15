import { useRouter } from 'next/router';

export default function Event() {
  const router = useRouter();
  const { eventId } = router.query;
  return <div>Event: {eventId}</div>;
}
