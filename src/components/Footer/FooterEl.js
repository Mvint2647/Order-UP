import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: black;
`;

export const FooterWrap = styled.div`
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;
export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%inherit;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  color: white;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  margin-right: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 24px;
`;
