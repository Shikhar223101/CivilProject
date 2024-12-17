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
      }}
    >
      <Row style={{ objectPosition: "center" }}>
        <Col xmd={12} sm={2} style={{ marginLeft: "20px" }}></Col>
        <Col xmd={12} sm={2}>
          <HouseIcon
            style={{
              fontSize: "50px",
              color: "orange",
              marginTop: "25px",
              marginLeft: "15px",
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              justifyContent: "center",
            }}
          >
            1567
          </h3>
          <p
            style={{
              color: "orange",
              fontSize: "0.7rem",
              justifyContent: "center",
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
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "15px",
              justifyContent: "center",
            }}
          >
            567
          </h3>
          <p
            style={{
              color: "orange",
              fontSize: "0.7rem",
              justifyContent: "center",
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
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              justifyContent: "center",
            }}
          >
            4000
          </h3>
          <p
            style={{
              color: "orange",
              fontSize: "0.7rem",
              justifyContent: "center",
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
            }}
          />
          <h3
            style={{
              marginTop: "5px",
              marginLeft: "37px",
              justifyContent: "center",
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
