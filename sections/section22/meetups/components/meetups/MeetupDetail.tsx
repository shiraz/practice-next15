import classes from './MeetupDetail.module.css';

interface MeetupDetailProps {
  address: string;
  description: string;
  image: string;
  title: string;
}

function MeetupDetail({
  address,
  description,
  image,
  title,
}: MeetupDetailProps) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} className={classes.image} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
