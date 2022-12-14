import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  const { activeLink, setActiveLink } = useState("home");
  const { scrolled, setSrolled } = useState(false);

  //set useEffect to detect if the window.scrollY action and do as following
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    //remove listerner when unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="#" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
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
