import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

function Header() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand
            href="/"
            style={{
              color: "black",
              fontSize: "30px",
              fontWeight: "bold",
              marginLeft: "25%",
              "@media (max-width: 575px)": {
                marginLeft: "0",
              },
            }}
          >
            <PrecisionManufacturingIcon
              style={{
                fontSize: "40px",
                color: "#FFA500",
              }}
            />
            Constra
          </Navbar.Brand>

          <p
            style={{
              marginLeft: "5%",
              fontSize: "0.7rem",
              justifyContent: "center",
              marginTop: "1%",
              "@media (max-width: 575px)": {
                marginLeft: "0",
              },
            }}
          >
            <span style={{ color: "gray", marginTop: "1%" }}>
              Call us: <br />
              <span style={{ color: "black" }}>123-456-7890</span>
            </span>
          </p>
          <p
            style={{
              fontSize: "0.7rem",
              marginTop: "1%",
              marginLeft: "2%",
              "@media (max-width: 575px)": {
                marginLeft: "0",
              },
            }}
          >
            <span style={{ color: "gray" }}>
              Email <br />
              <span style={{ color: "black" }}>singhshikhar2231@gmail.com</span>
            </span>
          </p>
          <p
            style={{
              fontSize: "0.7rem",
              marginTop: "1%",
              marginLeft: "2%",
              "@media (max-width: 575px)": {
                marginLeft: "0",
              },
            }}
          >
            <span style={{ color: "gray" }}>
              Global Certificate <br />
              <span style={{ color: "black" }}> ISO 123-456-7890</span>
            </span>
          </p>
          <Button
            style={{
              backgroundColor: "#FFA500",
              border: "none",
              color: "black",
              fontSize: "0.7rem",

              marginLeft: "2%",
              "@media (max-width: 575px)": {
                marginLeft: "0",
              },
            }}
            className="d-flex align-items-center"
          >
            <i
              className="bi bi-ticket me-2"
              style={{ color: "black", fontSize: "0.7rem" }}
            >
              Get a Qoute
            </i>
          </Button>
        </Navbar>
      </div>
      <Navbar bg="black" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{
                marginLeft: "25%",
                color: "white",
                fontWeight: "bold",
                fontSize: "0.8rem",
                "@media (max-width: 575px)": {
                  marginLeft: "0",
                },
              }}
            >
              <Nav.Link href="/" style={{ color: "orange" }}>
                HOME
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                {" "}
                COMPANY{" "}
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                PROJECTS{" "}
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                SERVICES{" "}
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                FEATURES{" "}
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                NEWS
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                CONTACT
              </Nav.Link>
            </Nav>

            <Form
              className="d-flex"
              style={{
                width: "25%",
                "@media (max-width: 575px)": { width: "100%" },
              }}
            >
              <Button className="bg-transparent">
                <SearchIcon />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
