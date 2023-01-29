import { useState, useEffect, React } from "react";
import axios from "axios";
import {
  Container,
  Button,
  Row,
  FloatingLabel,
  Form,
  FormControl,
} from "react-bootstrap";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  // GET with Axios
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await client.get("?_limit=10");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  // DELETE with Axios
  const deletePost = async (id) => {
    try {
      await client.delete(`${id}`);
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  // POST with Axios
  const addPosts = async (title, body) => {
    try {
      let response = await client.post("", {
        title: title,
        body: body,
      });
      setPosts([response.data, ...posts]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <nav>
        <h3 className="d-flex justify-content-center m-3">POSTS APP</h3>
      </nav>
      <Row>
        <Form
          controlId="floatingInput"
          className="mb-3"
          onSubmit={handleSubmit}
        >
          <Form.Control
            type="text"
            className="form-control mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControl
            as="textarea"
            type="email"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></FormControl>
          <Button size="sm" type="submit" className="mt-2">
            Add Post
          </Button>
        </Form>
      </Row>
      <Row>
        <h2>All Posts 📫</h2>
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
                <Button
                  size="sm"
                  variant="danger"
                  className=""
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Create;
