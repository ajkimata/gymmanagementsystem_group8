import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333; /* Example background color */
  color: white; /* Example text color */
  padding: 10px 20px;
`;

const NavItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem>
        <img
          className="bx-bx-search-alt"
          alt="Bx bx search alt"
          src="bx-bx-search-alt-2.svg"
        />
      </NavItem>
      <NavLink to="/" className="nav-link">
        HOME
      </NavLink>
      <NavLink to="/classes" className="nav-link">
        CLASSES
      </NavLink>
      <NavLink to="/login" className="nav-link">
        LOG IN
      </NavLink>
      <NavLink to="/about" className="nav-link">
        ABOUT US
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        CONTACT US
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
