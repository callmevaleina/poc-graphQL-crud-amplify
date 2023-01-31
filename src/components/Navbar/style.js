import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
  background: #a75d5d;
  height: 45px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  filter: drop-shadow(0 0 5px #333);
`;

const NavHome = styled(Link)`
color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 0 1rem;
`

const NavLink = styled(Link)`
  background: white;
  color: #342121;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 0.2rem 1rem;
  border: 1px solid white;
  height: 70%;
  border-radius: 3px;
  margin-right: 20px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  :hover{
    color: white;
    border: 1px solid white;
    background: transparent;

  }
`;

const NavIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 10px;
  filter: drop-shadow(0 0 2px #333);
`;

const NavButtons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
`

const NavMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { Nav, NavHome, NavLink, NavButtons, NavMenu, NavIcon };
