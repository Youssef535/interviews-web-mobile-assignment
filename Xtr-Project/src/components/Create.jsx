import { useState, useEffect, React } from "react";
import axios from "axios";
import { Container, Button, Row, Form } from "react-bootstrap";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const EditPost = ({ postId }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`${API_URL}/${postId}`);
      setTitle(data.title);
      setBody(data.body);
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, body };
    await axios.post(`${API_URL}/${postId}`, updatedPost);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Button size="sm" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditPost;
