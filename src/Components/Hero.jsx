import { Container, Row, Col, Image } from "react-bootstrap";

function Hero() {
  return (
    <Container
      fluid
      className="hero"
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/bg1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row className="w-100">
        <Col xs={12} className="d-flex flex-column align-items-center">
          <h1
            style={{
              color: "white",
              fontSize: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
              marginLeft: "40%",
            }}
          >
            WHEN SERVICES MEET INNOVATION
          </h1>
          <a
            href="#"
            className="btn btn-transparent"
            style={{ color: "white", borderColor: "white", marginLeft: "40%" }}
          >
            OUR SERVICES
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
