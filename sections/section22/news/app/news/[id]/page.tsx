export default function NewsDetailPage({ params }: { params: { id: string } }) {
  return <h1>News Page {params.id}</h1>;
}
