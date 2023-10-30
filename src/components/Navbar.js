import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Users from "../admin/User";

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
    0.8
  ); // adjusted the color for slight transparency
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100; // to ensure navbar stays on top
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  color: #d6fd51;
  text-decoration: none;

  span {
    display: inline-block;
    transform: skew(-15deg); // Adds a slight slant to the "P"
  }
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
  let location = useLocation();
  // If current path is "/login", don't render the navbar.
  // If current path is "/login" or "/register", don't render the navbar.
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/admin" ||
    location.pathname === "/admin/users"
  ) {
    return null;
  }
  return (
    <NavbarContainer>
      <Logo to="/">
        <span>P</span>owerhouse
      </Logo>
      <NavItems>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/classes">CLASSES</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
        <SearchIcon icon={faSearch} />
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
