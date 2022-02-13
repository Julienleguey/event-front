function CommentCard({ comment }) {
  return (
    <div className="comment-card-container">
      <p className="email">{comment.author}</p>
      <p>{comment.message}</p>
    </div>
  );
}

export default CommentCard;
