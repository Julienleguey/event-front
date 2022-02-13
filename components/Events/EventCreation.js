import { useState } from "react";
import { useRouter } from 'next/router';
import axios from "../../utils/axios";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import Button from "../shared/Button";
import NProgress from "nprogress";

const emptyEvent = {
  name: "",
  date: new Date(),
  email: "",
  description: "",
}

function EventCreation() {
  const router = useRouter();
  const [newEvent, setNewEvent] = useState(emptyEvent);
  const [errors, setErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  function handleChangeNewEvent(e) {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  }

  async function postEvent(e) {
    e.preventDefault();

    try {
      NProgress.start();
      setSubmitting(true);
      setErrors([]);
      await axios.post("/event", { event: newEvent });
      router.reload();
    } catch (err) {
      setErrors(err.response.data.errors);
    } finally {
      setSubmitting(false);
      NProgress.done();
    }
  }

  return (
    <div className="event-creation-container">
      <div className="event-title-container">
        <h1>Ajouter un évènement</h1>
      </div>
      <div className="event-creation-form-container">
        <form onSubmit={postEvent}>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={newEvent.name}
            onChange={handleChangeNewEvent}
            required
            error={errors.find((error) => error.path === "name")}
          />
          <Input
            name="date"
            type="date"
            placeholder="dd/mm/yyyy"
            value={newEvent.date}
            onChange={handleChangeNewEvent}
            required
            error={errors.find((error) => error.path === "date")}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={newEvent.email}
            onChange={handleChangeNewEvent}
            required
            error={errors.find((error) => error.path === "email")}
          />
          <TextArea
            name="description"
            placeholder="Description"
            value={newEvent.description}
            onChange={handleChangeNewEvent}
            error={errors.find((error) => error.path === "description")}
          />
          <div className="event-submit-btn-container">
            <Button type="submit" disabled={submitting}>Ajouter un évènement</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventCreation;
