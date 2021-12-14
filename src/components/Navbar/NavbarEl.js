import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  align-items: center;
  height: 20px;
  justify-content: center;
  font-weight: 700;
  text-shadow: -1px 1px 0 #000;
`;

export const NavLink = styled(Link)`
  color: white;
  padding-top: 1rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaCoffee)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;


export const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  align-items: center;
  display: flex;
  margin-left: 24px;
  padding: 20px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 990px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.9rem;
  }
`;