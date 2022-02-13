import CommentCard from "./CommentCard";
import CommentCreation from "./CommentCreation";

function CommentSection({ comments, eventId }) {
  function displayComments() {
    if (!comments) return null;

    return comments.map((comment) => (
      <CommentCard key={comment.id} comment={comment}/>
    ));
  }


  return (
    <div>
      <div className="comment-title-container">
        <h3>Commentaires</h3>
      </div>

      <div className="comment-list-container">
        {displayComments()}
      </div>

      <CommentCreation eventId={eventId} />
    </div>
  );
}

export default CommentSection;
