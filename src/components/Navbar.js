import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Define a styled component for the navbar container
const NavbarContainer = styled.nav`
  background-color: #333; /* Background color */
  color: #fff; /* Text color */
  padding: 10px 0; /* Padding on top and bottom */
  position: fixed; /* Fixed position at the top */
  top: 0; /* Stick to the top of the viewport */
  left: 0;
  right: 0;
  z-index: 999; /* Ensure it's on top of other content */
`;

// Define a styled component for the list
const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

// Define a styled component for list items
const NavbarItem = styled.li`
  margin: 0 10px;
`;

// Define a styled component for links
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.2s; /* Smooth color transition on hover */

  &:hover {
    color: #ff5733; /* Change color on hover */
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to="/">HOME</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/classes">CLASSES</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/login">LOG IN</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/about">ABOUT US</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/team">TRAINERS</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/plan">PLANS</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/review">REVIEWS</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/contact">CONTACT US</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
