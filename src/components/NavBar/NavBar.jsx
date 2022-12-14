import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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

  const onUpdateActiveLink = (val) => {
    setActiveLink(val);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
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
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <LinkedInIcon
                onClick={(e) =>
                  (window.location.href =
                    "https://www.linkedin.com/in/peterzxli/")
                }
              />
              <GitHubIcon
                onClick={(e) =>
                  (window.location.href = "https://github.com/LIZXP")
                }
              />
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
