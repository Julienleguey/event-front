import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import EventCreation from "./EventCreation";
import EventList from "./EventList";
import NProgress from "nprogress";

function Events() {
  const [events, setEvents] = useState([]);
  const [order, setOrder] = useState("name");

  useEffect(() => {
    async function getEvents() {
      try {
        NProgress.start();
        const res = await axios.get(`/event?order=${order}`);
        setEvents(res.data.events);
      } finally {
        NProgress.done();
      }
    }

    getEvents();
  }, [order]);

  return (
    <div className="event-main-container">
      <EventCreation />
      <EventList events={events} order={order} setOrder={setOrder} />
    </div>
  );
}

export default Events;
