import { Container, Row, Col, Image } from "react-bootstrap";

function Hero() {
  return (
    <Container
      fluid
      className="hero"
      style={{
        backgroundImage: "url(/bg1.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "2rem",

          marginBottom: "2rem",
          marginLeft: "40%",
        }}
      >
        WHEN SERVICES MEET INNOVATION
      </h1>

      <a
        href="#"
        className="btn btn-transparent"
        style={{ marginTop: "15rem", color: "white", borderColor: "white" }}
      >
        OUR SERVICES
      </a>
    </Container>
  );
}

export default Hero;
