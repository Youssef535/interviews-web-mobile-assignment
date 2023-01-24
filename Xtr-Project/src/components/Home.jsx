import { React, useState } from "react";
import { Container, Button, Row, Offcanvas } from "react-bootstrap";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
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
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </div>
  );
};

export default Home;
