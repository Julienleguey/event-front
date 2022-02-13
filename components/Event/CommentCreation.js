import { useState } from "react";
import { useRouter } from 'next/router';
import axios from "../../utils/axios";
import Button from "../shared/Button";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import NProgress from "nprogress";

const emptyComment = {
  author: "",
  message: "",
}

function CommentCreation({ eventId }) {
  const router = useRouter();
  const [comment, setComment] = useState(emptyComment);
  const [errors, setErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  function handleChangeComment(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  }

  async function postComment(e) {
    e.preventDefault();

    try {
      NProgress.start();
      setSubmitting(true);
      setErrors([]);
      await axios.post("/comment", { comment: {...comment, EventId: eventId }});
      router.reload();
    } catch (err) {
      setSubmitting(false);
      setErrors(err.response.data.errors);
      NProgress.done();
    }
  }

  return (
    <div className="comment-creation-form-container">
      <form onSubmit={postComment}>
        <Input
          name="author"
          type="text"
          placeholder="Auteur"
          value={comment.author}
          onChange={handleChangeComment}
          required
          error={errors.find((error) => error.path === "author")}
        />
        <TextArea
          name="message"
          placeholder="Message"
          value={comment.message}
          onChange={handleChangeComment}
          required
          error={errors.find((error) => error.path === "message")}
        />

        <div className="event-submit-btn-container">
          <Button type="submit" disabled={submitting}>Ajouter un message</Button>
        </div>

      </form>
    </div>
  );
}

export default CommentCreation;