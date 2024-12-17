import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TuneIcon from "@mui/icons-material/Tune";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import GroupsIcon from "@mui/icons-material/Groups";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function About() {
  return (
    <Container fluid style={{ padding: "40px", marginTop: "-70px" }}>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <div
            style={{
              backgroundColor: "orange",
              color: "white",
              width: "100%",
              height: "70px",
              display: "flex",
              padding: "10px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "1.0rem", margin: 0 }}>
              WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION
            </h3>
            <button
              style={{
                fontSize: "0.8rem",
                backgroundColor: "white",
                color: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              LEARN MORE
            </button>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={{ span: 4, offset: 2 }}>
          <h5 style={{ marginLeft: "20px", fontSize: "1.0rem" }}>ABOUT US</h5>
          <h3 style={{ marginLeft: "20px", fontWeight: "bold" }}>
            WE DELIVER LANDMARK PROJECTS
          </h3>
          <p style={{ marginLeft: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.
            Repellendus alias vero delectus, unde vel sit reprehenderit
            temporibus fuga quae sint quia tenetur placeat provident. Quis earum
            eius asperiores.
          </p>
          <Row>
            <Col xs={12} sm={6} className="d-flex align-items-center">
              <EmojiEventsIcon
                style={{
                  fontSize: "40px",
                  color: "orange",
                  marginLeft: "20px",
                }}
              />
              <h5
                style={{
                  marginLeft: "10px",
                  fontSize: "1.0rem",
                }}
              >
                WE'VE REPUTATION FOR EXCELLENCE
              </h5>
            </Col>
            <Col xs={12} sm={6} className="d-flex align-items-center">
              <TuneIcon
                style={{
                  fontSize: "40px",
                  color: "orange",
                  marginLeft: "20px",
                }}
              />
              <h5
                style={{
                  marginLeft: "10px",
                  fontSize: "1.0rem",
                }}
              >
                WE BUILD PARTNERSHIPS
              </h5>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12} sm={6} className="d-flex align-items-center">
              <ThumbUpIcon
                style={{
                  fontSize: "40px",
                  color: "orange",
                  marginLeft: "20px",
                }}
              />
              <h5
                style={{
                  marginLeft: "10px",
                  fontSize: "1.0rem",
                }}
              >
                GUIDED BY COMMITMENT
              </h5>
            </Col>
            <Col xs={12} sm={6} className="d-flex align-items-center">
              <GroupsIcon
                style={{
                  fontSize: "40px",
                  color: "orange",
                  marginLeft: "20px",
                }}
              />
              <h5
                style={{
                  marginLeft: "10px",
                  fontSize: "1.0rem",
                }}
              >
                A TEAM OF PROFESSIONALS
              </h5>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="mt-2">
          <h3 style={{ marginLeft: "20px", fontWeight: "bold" }}>OUR VALUES</h3>
          <p style={{ marginLeft: "20px" }}>
            Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur
            bitters. Pop-up occaecat taxidermy street art, tattooed beard
            literally.
          </p>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <b>SAFETY</b>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <b>CUSTOMER SERVICE</b>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <b>INTEGRITY</b>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
