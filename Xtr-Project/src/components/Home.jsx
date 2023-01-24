import { React } from "react";
import { Container, Button, Row, Offcanva } from "react-bootstrap";


const Home = () => {
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
        <Button as="input" type="submit" value="Get Started" className="submit-btn" />
      </Container>
    </div>
  );
};

export default Home;
