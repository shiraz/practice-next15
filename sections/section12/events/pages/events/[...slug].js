import { useRouter } from 'next/router';

export default function FilteredEvents() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Filtered Event Using Slug: {slug}</div>;
}
