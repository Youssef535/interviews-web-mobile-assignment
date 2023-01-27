import { useEffect, React } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const DeletePost = ({ postId }) => {
  const handleDelete = async () => {
    await axios.delete(`${API_URL}/${postId}`);
  }; 

  return (
    <Container>
      <div className="pt-2 d-flex justify-content-center">
        <Button
          
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </Container>
  );
};

export default DeletePost;
