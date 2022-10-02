import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background:#3d2c3c;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #ffc77d;
  font-size: 2rem;
  text-decoration: none;
  font-weight: 800;

`;

export const NavLink = styled(Link)`
color: #f7dd99;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
  color: black;
}
.navbutton {
  font-size: 100px;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
