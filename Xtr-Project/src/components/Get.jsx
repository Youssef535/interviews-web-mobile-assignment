import { React, useState, useEffect } from "react";
import axios from "axios";
import { Container, Pagination, Button, Card, Row } from "react-bootstrap";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(15); // You controle 100% of it
  // Redesign, if necessary, the rendering and retrieval of the list considering to support a hugely larger number of posts (~thousands of rows) => you can just change some line of code
  const [loading, setLoading] = useState(false);

  const getPosts = async (page) => {
    setLoading(true);
    const { data } = await axios.get(
      `${API_URL}?_page=${page}&_limit=${perPage}`
    );
    setPosts(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getPosts(currentPage);
  }, [currentPage]);

  // Handle pagination
  const handlePagination = (direction) => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        <Card bg="dark" className="pt-2">
          <ul>
            {posts.map((post) => (
              <Card.Body>
              <li className="d-flex justify-content-center"  key={post.id}>{post.title}</li>
              <p>{post.body}</p>
              </Card.Body>
            ))}
          </ul>
          <div className="d-flex justify-content-center">
            <Button size="sm" onClick={() => handlePagination("prev")}>Previous</Button>
            <span className="p-2">{currentPage}</span>
            <Button size="sm" onClick={() => handlePagination("next")}>Next</Button>
          </div>
        </Card>
      </Row>
    </Container>
  );
};

export default Posts;
