export default function MealDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <h1>Meal Detail: {slug}</h1>;
}
