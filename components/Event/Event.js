import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import dateFormatted from "../../utils/dateFormatted";
import CommentSection from "./CommentSection";
import NProgress from "nprogress";

function Event() {
  const router = useRouter();
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function getEvent() {
      try {
        NProgress.start();
        const eventId = router.query.id;
        const res = await axios.get(`/event/${eventId}`);
        setEvent(res.data.event);
      } finally {
        NProgress.done();
      }
    }

    getEvent();
  }, [router.query.id]);

  return (
    <div className="event-main-container">
      {!!event.name && (
        <div className="event-infos">
          <div className="event-title-container">
            <h1>{event.name}</h1>
          </div>

          <p>Date : {dateFormatted(event.date)}</p>
          <p>Email de l&apos;organisateur : {event.email}</p>
          <p>Description : {event.description}</p>
        </div>
      )}

      <CommentSection comments={event.comments} eventId={event.id} />
    </div>
  )
}

export default Event;
