import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZmMTQwODIxNGMzYTAwMTQzYzYyMjEiLCJpYXQiOjE2OTQ0Mzg0MDgsImV4cCI6MTY5NTY0ODAwOH0.IcYsBfxyMOyQefjck2HNmmC96YZJwzKIiaMYq3-1A8U",
        },
      });
      if (response.ok) {
        alert("Comment was deleted successfully!");
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      alert("Error - comment was NOT deleted!");
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
