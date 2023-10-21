import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = styled.nav`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: rgba(
    0,
    0,
    0,
    0
  ); // adjusted the color for slight transparency
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100; // to ensure navbar stays on top
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  color: #d6fd51; // adjusted the color to match the design
  text-decoration: none;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #d6fd51;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 2rem;
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">Powerhouse</Logo>
      <NavItems>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/classes">CLASSES</NavLink>
        <NavLink to="/login">LOG IN</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
        <SearchIcon icon={faSearch} />
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
