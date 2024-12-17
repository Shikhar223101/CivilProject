import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Col, Row, Button } from "react-bootstrap";

import Footer2 from "./Footer2";

function Project() {
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
        WORK OF EXCELLENCE
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
        RECENT PROJECT
      </h1>
      <div>
        <Row>
          <Col xm={12} sm={3}></Col>
          <Col xm={12} sm={2}>
            <Card>
              <CardActionArea style={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./src/assets/project (1).jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN
                    MID-MISSOURI BEGIN CONSTRUCTION
                    <br />
                    <br />
                    26 MAY 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col xm={12} sm={2}>
            <Card>
              <CardActionArea style={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./src/assets/project (2).jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION
                    PROJECT NAMED <br />
                    <br />
                    JUNE 17, 2017
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Button
              style={{
                backgroundColor: "orange",
                color: "white",
                fontSize: "0.8rem",
                marginTop: "10px",
                marginLeft: "30px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                justifyContent: "center",
              }}
            >
              SEE MORE PROJECT
            </Button>
          </Col>
          <Col xm={12} sm={2}>
            <Card>
              <CardActionArea style={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="./src/assets/project (3).jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR
                    FACILITIES <br />
                    <br /> AUG 13, 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col xm={12} sm={3}></Col>
        </Row>
      </div>

      <Footer2 />
    </div>
  );
}

export default Project;
