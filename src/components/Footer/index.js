import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialLogo,
  SocialIconLink,
} from "./FooterEl";
import { FaFacebook, FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Dunkin' Coffee & Donuts</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                a
                href="https://www.facebook.com/DunkinUS"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                a
                href="https://www.behance.net/Melissasta10d9"
                aria-label="Behance"
              >
                <FaBehance />
              </SocialIconLink>
              <SocialIconLink
                a
                href="https://github.com/Mvint2647"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                a
                href="https://www.linkedin.com/in/melissav1133/"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
