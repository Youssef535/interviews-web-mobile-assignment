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
//  add localStorage if you want to keep your work
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);
  const [id, setID] = useState(null);

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
  //  Update With axios
  const handleUpdate = async (post) => {
    //post.title = post;
    post.body = "updated";
    await axios.put(client + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };

  
  //for adding comment under the posts body fetch the api url and add a function and a button handleComment and then add css class for the animatin
  // i'm trying to not using unnecessary thing < consedering working with big apps with best practice
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
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div>
                <Button
                  size="sm"
                  variant="danger"
                  className=""
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  className="m-1"
                  onClick={() => handleUpdate(post)}
                >
                  Update
                </Button>
                {/*
                <Button
                  size="sm"
                  variant="success"
                  className="m-1"
                  //onClick={() => handleComment(post)}
                >
                  Comment
                </Button>
                */}
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Create;
