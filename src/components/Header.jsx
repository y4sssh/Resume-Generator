import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import githubLogo from "./images/github.png"; // import the GitHub logo image

function Header() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <Navbar
      sticky="top"
      bg="light"
      expand="lg"
      onToggle={handleToggle}
      expanded={open}
    >
      <Container fluid>
        <StyledNavbar.Brand as={Link} to="/">
          Resume Generator
        </StyledNavbar.Brand>
        {!open ? (
          <StyledNavbar.Toggle
            aria-controls="navbarScroll"
            style={{ boxShadow: "none" }}
          />
        ) : (
          <StyledNavbar.Toggle
            className="navbar-toggler"
            style={{ boxShadow: "none" }}
          >
            <HiXMark size={33} />
          </StyledNavbar.Toggle>
        )}
        <StyledNavbar.Collapse id="navbarScroll">
          <NavLinks>
            <StyledNavLink exact="true" as={NavLink} to="/">
              Home
            </StyledNavLink>
            <StyledNavLink as={NavLink} to="/about">
              About
            </StyledNavLink>
            <StyledNavLink as={NavLink} to="/contact">
              Contact
            </StyledNavLink>
            <StyledNavLink as={NavLink} to="/study">
              Study
            </StyledNavLink>
          </NavLinks>
          <GitHubLink href="https://github.com/y4sssh/Resume-Generator">
            <img src={githubLogo} alt="GitHub logo" />
          </GitHubLink>
        </StyledNavbar.Collapse>
      </Container>
    </Navbar>
  );
}

const StyledNavbar = styled(Navbar)`
  padding: 1rem 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;

  @media screen and (max-width: 991.98px) {
    padding: 1rem;
  }

  @media screen and (max-width: 767.98px) {
    padding: 0.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 100px;
  flex: 1; /* make the NavLinks component take up all remaining space */

  @media screen and (max-width: 991.98px) {
    flex-direction: column;
    gap: 20px;
    padding-right: 0px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #333;
  font-weight: 500;
  margin: 0 1rem;
  &:hover {
    color: #555;
    text-decoration: none;
  }
  &.active {
    color: #007bff;
    text-decoration: none;
    border-bottom: 2px solid #007bff;
  }

  @media screen and (max-width: 767.98px) {
    margin: 0.5rem;
  }
`;

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto; /* push the GitHub logo to the left side of the header */
  color: #333;
  font-weight: 500;
  &:hover {
    color: #555;
    text-decoration: none;
  }

  img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 991.98px) {
    margin-top: 10px;
  }
`;

export default Header;
