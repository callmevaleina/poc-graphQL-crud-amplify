import React from "react";
import { Nav, NavHome, NavIcon, NavLink, NavMenu } from "./style";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavHome to="/"><NavIcon src={logo}/></NavHome>
          <NavLink to="/library">Library</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
