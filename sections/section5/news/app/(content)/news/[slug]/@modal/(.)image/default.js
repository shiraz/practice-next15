import ModalBackDrop from '@/components/ModalBackDrop';
// import { DUMMY_NEWS } from '@/constants/dummy-news';
import { getNewsItem } from '@/lib/news';

export default async function InterceptedImage({ params }) {
  const { slug } = params;
  // const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />;
        </div>
      </dialog>
    </>
  );
}
