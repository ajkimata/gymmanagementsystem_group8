import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  color: #fff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;

const ActiveNavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &.active {
    color: #d6fd51;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <ActiveNavbarLink exact to="/">
            HOME
          </ActiveNavbarLink>
        </NavbarItem>
        <NavbarItem>
          <ActiveNavbarLink to="/classes">CLASSES</ActiveNavbarLink>
        </NavbarItem>
        <NavbarItem>
          <ActiveNavbarLink to="/login">LOG IN</ActiveNavbarLink>
        </NavbarItem>
        <NavbarItem>
          <ActiveNavbarLink to="/about">ABOUT US</ActiveNavbarLink>
        </NavbarItem>
        <NavbarItem>
          <ActiveNavbarLink to="/contact">CONTACT US</ActiveNavbarLink>
        </NavbarItem>
        <NavbarItem>
          <ActiveNavbarLink to="/Register">REGISTER</ActiveNavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
