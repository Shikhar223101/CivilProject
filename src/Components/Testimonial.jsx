import React from "react";
import { Row, Col } from "react-bootstrap";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundImage: "url(./src/assets/client1.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100px",
  width: "150px",
  marginTop: "10px",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Testimonial() {
  return (
    <div>
      <Row>
        <Col xm={12} sm={2}></Col>
        <Col xm={12} sm={4}>
          <h1
            style={{
              marginTop: "50px",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: "bold",
            }}
          >
            TESTIMONIALS
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <FormatQuoteIcon
              style={{
                fontSize: "40px",
                color: "orange",
                marginTop: "-10%",
                marginLeft: "20px",
              }}
            />
            <p
              style={{
                fontSize: "0.8rem",
                marginTop: "10px",
                marginLeft: "20px",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              iusto tempore totam eaque harum neque perferendis, quibusdam,
              repellendus quos fuga eveniet odit suscipit! Amet ratione
              reiciendis minima magni architecto sit........
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            <img
              src="./src/assets/profile.jpeg"
              alt="profile"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  fontSize: "1.2rem",
                  color: "orange",
                }}
              >
                John Doe
              </h3>
              <p style={{ marginTop: 0, marginBottom: 0, fontSize: "0.8rem" }}>
                Manager, ABCD Inc.
              </p>
            </div>
          </div>
        </Col>
        <Col xm={12} sm={4}>
          <h1
            style={{
              marginTop: "50px",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            HAPPY CLIENTS
          </h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item></Item>
                </Grid>
              ))}
            </Grid>
          </Box>{" "}
        </Col>
        <Col xm={12} sm={2}></Col>
      </Row>

      <div>
        <Row>
          <Col
            xm={12}
            sm={2}
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "50px",
              padding: "20px",
              marginBottom: "0px",
            }}
          ></Col>
          <Col
            xm={12}
            sm={2}
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "50px",
              padding: "20px",
              marginBottom: "0px",
            }}
          >
            <div className="text-lg font-bold">
              CAN WE HELP? <br />
              <span className="text-2xl">(+9) 847-291-4353</span>
            </div>
          </Col>

          <Col
            xm={12}
            sm={8}
            style={{
              backgroundColor: "orange",
              color: "white",
              marginTop: "50px",
              padding: "20px",
              marginBottom: "0px",
            }}
          >
            <span className="mr-4">NEWSLETTER SIGN-UP</span>
            <input
              type="email"
              placeholder="Your email and hit enter"
              className="p-2 bg-gray-700 text-white border border-gray-600"
              style={{ width: "50%", marginLeft: "10px" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Testimonial;
