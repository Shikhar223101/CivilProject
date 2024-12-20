import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TuneIcon from "@mui/icons-material/Tune";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ConstructionIcon from "@mui/icons-material/Construction";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DrawIcon from "@mui/icons-material/Draw";
import StrollerIcon from "@mui/icons-material/Stroller";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function Feature() {
  return (
    <div>
      <h1
        style={{
          marginTop: "50px",
          fontFamily: "'Orbitron', sans-serif",

          textAlign: "center",
          fontSize: "0.8rem",
          color: "black",
        }}
      >
        WE ARE SPECIALISTS IN
      </h1>
      <h1
        style={{
          marginTop: "10px",
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "2.0rem",
          color: "black",
        }}
      >
        WHAT WE DO
      </h1>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={2} className="mb-5"></Col>
          <Col xs={12} md={2} className="mb-5">
            <Row>
              <Col xs={12} md={4}>
                <ApartmentIcon
                  style={{
                    fontSize: "40px",
                    color: "orange",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                />
              </Col>
              <Col xs={12} md={8}>
                <h5
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  HOME CONSTRUCTION
                </h5>
                <p
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.5rem",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  officiis explicabo veniam nesciunt eum, consequuntur eveniet
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <ConstructionIcon
                  style={{
                    fontSize: "40px",
                    color: "orange",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                />
              </Col>
              <Col xs={12} md={8}>
                <h5
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  BUILDING REMODELS
                </h5>
                <p
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.5rem",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  officiis explicabo veniam nesciunt eum, consequuntur eveniet
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <DesignServicesIcon
                  style={{
                    fontSize: "40px",
                    color: "orange",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                />
              </Col>
              <Col xs={12} md={8}>
                <h5
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  INTERIOR DESIGN
                </h5>
                <p
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.5rem",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  officiis explicabo veniam nesciunt eum, consequuntur eveniet
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className="mb-5">
            <img
              src="/png1.png"
              style={{ width: "100%", height: "300px", marginTop: "20px" }}
              alt="construction image"
            />
          </Col>
          <Col xs={12} md={2} className="mb-5">
            <Row>
              <Col xs={12} md={4}>
                <DrawIcon
                  style={{
                    fontSize: "40px",
                    color: "orange",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                />
              </Col>
              <Col xs={12} md={8}>
                <h5
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  EXTERIOR DESIGN
                </h5>
                <p
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.5rem",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  officiis explicabo veniam nesciunt eum, consequuntur eveniet
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <StrollerIcon
                  style={{
                    fontSize: "40px",
                    color: "orange",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                />
              </Col>
              <Col xs={12} md={8}>
                <h5
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  RENOVATION
                </h5>
                <p
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.5rem",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  officiis explicabo veniam nesciunt eum, consequuntur eveniet
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <HealthAndSafetyIcon
                  style={{
                    fontSize: "40px",
                    color: "orange",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                />
              </Col>
              <Col xs={12} md={8}>
                <h5
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  SAFETY MANAGEMENT
                </h5>
                <p
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "0.5rem",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  officiis explicabo veniam nesciunt eum, consequuntur eveniet
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2} className="mb-5"></Col>
          <div
            style={{
              backgroundColor: "#e6e6e6",
              marginTop: "-50px",
              height: "100px",
              width: "100%",
            }}
          >
            <h1
              style={{
                marginTop: "50px",
                fontFamily: "'Orbitron', sans-serif",

                textAlign: "center",
                fontSize: "0.8rem",
                color: "black",
                fontWeight: "bold",
              }}
            >
              WORK OF EXCELLENCE
            </h1>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Feature;
