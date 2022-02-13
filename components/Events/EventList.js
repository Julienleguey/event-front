import EventCard from "./EventCard";

function EventList({ events, order, setOrder }) {
  function displayEvents() {
    return events.map((event) => (
      <EventCard key={event.id} event={event} />
    ));
  }

  return (
    <div>
      <div className="event-title-container">
        <h1>Évènements</h1>
      </div>

      <div className="event-filter-container">
        <p>Trier par</p>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="date">date</option>
          <option value="name">nom</option>
        </select>
      </div>

      {events.length === 0 && (
        <p>Aucun évènement trouvé</p>
      )}
      
      <div className="event-list-container">
        {displayEvents()}
      </div>
    </div>
  );
}

export default EventList;