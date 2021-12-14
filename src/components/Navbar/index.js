import React, { useState, useEffect } from "react";
import { Nav, NavLink, Bars, NavIcon , NavLogo} from "./NavbarEl";
import { animateScroll as scroll } from "react-scroll";


const Navbar = ({ toggle }) => {
 
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);
  
    const toggleHome = () => {
      scroll.scrollToTop();
    };

  return (
    <>
      <Nav scrollNav={scrollNav}>
      <NavLogo to="/Home" onClick={toggleHome}>
      Dunkin Coffee & Donuts
          </NavLogo>
        <NavLink 
        to="donuts"
        smooth={true}
        duration={500}
        spy={true}
        >

        </NavLink>
        <NavLink to="coffee"></NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};
export default Navbar;
