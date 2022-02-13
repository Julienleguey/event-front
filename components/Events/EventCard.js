import Link from "next/link";
import dateFormatted from "../../utils/dateFormatted";
import classnames from "classnames";

function EventCard({ event }) {
  return (
    <div className="event-card-container">
      <div className="card-header">
        <Link href={`/event/${event.id}`}>
          <a className={classnames("link", event.state)}>
            <span>{event.name}</span>
          </a>
        </Link>
        <p>{dateFormatted(event.date)}</p>
      </div>
      <p className="email">{event.email}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default EventCard;
