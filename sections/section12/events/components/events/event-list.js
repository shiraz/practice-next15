import EventItem from './event-item';

import classes from './event-list.module.css';

export default function EventList(props) {
  const { items } = props;

  if (!items || items.length === 0) {
    return <div>No events found.</div>;
  }

  return (
    <ul className={classes.list}>
      {items.map(({ id, date, image, location, title }) => (
        <EventItem
          id={id}
          date={date}
          image={image}
          key={id}
          location={location}
          title={title}
        />
      ))}
    </ul>
  );
}
