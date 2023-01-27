import { React, useState } from "react";
import { Container, Button, Row, Offcanvas, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-light">
            XTR-APP
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Container fluid="md">
        <Row>
          <h3 className="Heading-1 justify-content-center">
            This System operations should be designed to provide an intuitive
            and user-friendly experience, with clear and consistent feedback to
            the user.
          </h3>
        </Row>
        <Button
          as="input"
          type="submit"
          value="Get Started"
          className="submit-btn"
          onClick={handleShow}
        />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>XTR Project</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li>
                <Button className="m-2" size="sm" as={Link} to="/Create">
                  Add Post
                </Button>
              </li>
              <li>
                <Button className="m-2" size="sm" as={Link} to="/Get">
                  Get Posts
                </Button>
              </li>
              <li>
                <Button className="m-2" size="sm" as={Link} to="/Update">
                  Update Posts
                </Button>
              </li>
              <li>
                <Button className="m-2" size="sm" as={Link} to="/Delete">
                  Delete Posts
                </Button>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </div>
  );
};

export default Home;
