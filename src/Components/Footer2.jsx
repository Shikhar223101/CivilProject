import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Footer2() {
  return (
    <div
      style={{ marginTop: "50px", backgroundColor: "black", height: "300px" }}
    >
      <Container>
        <Row>
          <Col xm={12} sm={3}></Col>
          <Col xm={12} sm={2} style={{ marginTop: "50px" }}>
            <p style={{ marginTop: "15px" }}>
              {" "}
              <span style={{ color: "orange" }}>| </span>{" "}
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  marginTop: "15px",
                }}
              >
                ABOUT US
              </span>
            </p>
            <div
              href="/"
              style={{
                color: "orange",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              <PrecisionManufacturingIcon
                style={{
                  fontSize: "40px",
                  color: "#FFA500",
                }}
              />
              Constra
            </div>
            <p
              style={{ marginTop: "15px", color: "white", fontSize: "0.5rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dicta ullam quos natus voluptates alias ea aliquam cupiditate unde
              laboriosam mollitia harum magni totam, laudantium ducimus facilis
              delectus possimus officia?
            </p>
            <div className="d-flex  mb-4 margin-top" style={{ gap: "20px" }}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-white" size="1em" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white" size="1em" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white" size="1em" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white" size="1em" />
              </a>
            </div>
          </Col>
          <Col xm={12} sm={2} style={{ marginTop: "50px" }}>
            <p style={{ marginTop: "15px" }}>
              {" "}
              <span style={{ color: "orange" }}>| </span>{" "}
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  marginTop: "15px",
                }}
              >
                WORKING HOURS
              </span>
            </p>
            <p
              style={{ marginTop: "15px", color: "white", fontSize: "0.5rem" }}
            >
              We work 7 days a week, every day excluding major holidays. Contact
              us if you have an emergency, with our Hotline and Contact form.
            </p>
            <Row>
              <Col
                xm={12}
                sm={6}
                style={{
                  marginTop: "10px",
                  fontSize: "0.7rem",
                  color: "white",
                }}
              >
                Monday - Friday: <br /> Saturday:
                <br /> Sunday and holidays:
              </Col>
              <Col
                xm={12}
                sm={6}
                style={{
                  marginTop: "10px",
                  fontSize: "0.7rem",
                  color: "white",
                }}
              >
                10:00 - 16:00 <br />
                12:00 - 15:00 <br />
                09:00 - 12:00
              </Col>
            </Row>
          </Col>
          <Col xm={12} sm={2} style={{ marginTop: "50px" }}>
            <p style={{ marginTop: "15px" }}>
              {" "}
              <span style={{ color: "orange" }}>| </span>{" "}
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  marginTop: "15px",
                }}
              >
                SERVICES
              </span>
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: "0px",
                fontSize: "0.7rem",
                marginTop: "15px",
                color: "white",

                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: "10px",

                cursor: "pointer",
                "& li:hover": {
                  color: "orange",
                },
              }}
            >
              <li>
                <ArrowForwardIosIcon
                  style={{ fontSize: "0.7rem", marginRight: "5px" }}
                />
                Construction
              </li>
              <li>
                <ArrowForwardIosIcon
                  style={{ fontSize: "0.7rem", marginRight: "5px" }}
                />
                Architecture
              </li>
              <li>
                <ArrowForwardIosIcon
                  style={{ fontSize: "0.7rem", marginRight: "5px" }}
                />
                Interior Design
              </li>
              <li>
                <ArrowForwardIosIcon
                  style={{ fontSize: "0.7rem", marginRight: "5px" }}
                />
                Building
              </li>
              <li>
                <ArrowForwardIosIcon
                  style={{ fontSize: "0.7rem", marginRight: "5px" }}
                />
                Real Estate
              </li>
            </ul>
          </Col>
          <Col xm={12} sm={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer2;
