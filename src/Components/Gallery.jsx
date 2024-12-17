import React from "react";

import { Container, Grid, Button, Typography } from "@mui/material";
import "@fontsource/roboto/700.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Testimonial from "./Testimonial";

// Assuming Tailwind CSS is integrated via a CSS file

function Gallery() {
  return (
    <div>
      <Row>
        <Col xm={12} sm={2}></Col>
        <Col xm={12} sm={8}>
          <Container className="p-4">
            <Typography
              variant="h4"
              component="h1"
              className="text-center mb-8 font-bold"
              style={{
                marginTop: "10px",
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "2.0rem",
                color: "black",
              }}
            >
              RECENT PROJECTS
            </Typography>

            <div
              className="flex justify-center mb-4 "
              style={{ fontSize: "0.5rem", marginTop: "30px" }}
            >
              <Button variant="contained" color="warning" className="mx-2">
                SHOW ALL
              </Button>
              <Button variant="text" className="mx-2">
                COMMERCIAL
              </Button>
              <Button variant="text" className="mx-2">
                EDUCATION
              </Button>
              <Button variant="text" className="mx-2">
                GOVERNMENT
              </Button>
              <Button variant="text" className="mx-2">
                INFRASTRUCTURE
              </Button>
              <Button variant="text" className="mx-2">
                RESIDENTIAL
              </Button>
            </div>

            <div
              style={{
                backgroundImage: "url(./src/assets/gallery2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "70vh",
              }}
            ></div>

            <div className="flex justify-center">
              <Button
                variant="contained"
                color="warning"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  fontSize: "0.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                VIEW ALL PROJECTS
              </Button>
            </div>
          </Container>
        </Col>
        <Col xm={12} sm={2}></Col>
      </Row>
      <Testimonial />
    </div>
  );
}

export default Gallery;
