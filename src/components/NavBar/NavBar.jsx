import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="#" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="/">
                <img src="#" alt="social-icons" />
              </a>
              <a href="/">
                <img src="#" alt="social-icons" />
              </a>
              <a href="/">
                <img src="#" alt="social-icons" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                console.log("connect");
              }}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
