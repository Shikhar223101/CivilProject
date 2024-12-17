import React from "react";
import HouseIcon from "@mui/icons-material/House";
import { Container, Row, Col } from "react-bootstrap";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        marginTop: "25px",
        padding: "20px",
        marginBottom: "0px",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Row style={{ objectPosition: "center", width: "100%" }}>
        <Col xmd={12} sm={2} style={{ marginLeft: "20px" }}></Col>
        <Col xmd={12} sm={2}>
          <HouseIcon
            style={{
              fontSize: "50px",
              color: "orange",
              marginTop: "25px",
              marginLeft: "15px",
              "@media (max-width: 768px)": {
                fontSize: "30px",
                marginLeft: "5px",
              },
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              justifyContent: "center",
              "@media (max-width: 768px)": {
                fontSize: "1rem",
                marginTop: "10px",
              },
            }}
          >
            1567
          </h3>
          <p
            style={{
              color: "orange",
              fontSize: "0.7rem",
              justifyContent: "center",
              "@media (max-width: 768px)": {
                fontSize: "0.5rem",
              },
            }}
          >
            TOTAL PROJECTS
          </p>
        </Col>
        <Col xmd={12} sm={2}>
          <EngineeringIcon
            style={{
              fontSize: "50px",
              color: "orange",
              marginTop: "25px",
              marginLeft: "20px",
              "@media (max-width: 768px)": {
                fontSize: "30px",
                marginLeft: "10px",
              },
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "15px",
              justifyContent: "center",
              "@media (max-width: 768px)": {
                fontSize: "1rem",
                marginTop: "10px",
              },
            }}
          >
            567
          </h3>
          <p
            style={{
              color: "orange",
              fontSize: "0.7rem",
              justifyContent: "center",
              "@media (max-width: 768px)": {
                fontSize: "0.5rem",
              },
            }}
          >
            STAFF MEMBERS
          </p>
        </Col>
        <Col xmd={12} sm={2}>
          {" "}
          <AccessTimeIcon
            style={{
              fontSize: "50px",
              color: "orange",
              marginTop: "25px",
              marginLeft: "15px",
              "@media (max-width: 768px)": {
                fontSize: "30px",
                marginLeft: "10px",
              },
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              justifyContent: "center",
              "@media (max-width: 768px)": {
                fontSize: "1rem",
                marginTop: "10px",
              },
            }}
          >
            4000
          </h3>
          <p
            style={{
              color: "orange",
              fontSize: "0.7rem",
              justifyContent: "center",
              "@media (max-width: 768px)": {
                fontSize: "0.5rem",
              },
            }}
          >
            HOURS OF WORK
          </p>
        </Col>
        <Col xmd={12} sm={2}>
          {" "}
          <LanguageIcon
            style={{
              fontSize: "50px",
              color: "orange",
              marginTop: "25px",
              marginLeft: "30px",
              "@media (max-width: 768px)": {
                fontSize: "30px",
                marginLeft: "20px",
              },
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "37px",
              justifyContent: "center",
              "@media (max-width: 768px)": {
                fontSize: "1rem",
                marginTop: "10px",
              },
            }}
          >
            44
          </h3>
          <p
            style={{
              color: "orange",
              fontSize: "0.7rem",
              justifyContent: "center",
              marginBottom: "25px",
              "@media (max-width: 768px)": {
                fontSize: "0.5rem",
              },
            }}
          >
            COUNTRIES EXPERIENCE
          </p>
        </Col>
        <Col xmd={12} sm={2}></Col>
      </Row>
    </div>
  );
}

export default Footer;
