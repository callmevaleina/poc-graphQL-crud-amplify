import React from "react";
import { Nav, NavButtons, NavHome, NavIcon, NavLink, NavMenu } from "./style";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavHome to="/"><NavIcon src={logo}/></NavHome>
          <NavButtons>
          <NavLink to="/weather">Weather</NavLink>
          <NavLink to="/library">Library</NavLink>
          </NavButtons>
          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
