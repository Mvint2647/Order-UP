import React, {useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroItem,
  HeroH1,
  HeroBtn,
  HeroContent,
} from "./HeroEl";

const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <HeroContainer>
      <Navbar  toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItem>
          <HeroH1>The World Runs on Dunkin'</HeroH1>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItem>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
