import styled from "styled-components";
import ImgBg from "../../images/Dunkin1.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh -90px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 700px;
  color: white;
  text-transform: uppercase;
  line-height: 1;
  
  @media screen and (max-width: 860px) {
    width: 100%;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(4.5rem, 10vw, 5rem);
  margin-bottom: 4rem;
  word-spacing: 10px;
  text-shadow: -1px 1px 0 #000;
  
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  margin-bottom: 1rem 4rem;
  background: #D18700;
  color: white;
  transition: 0.2s ease-out;
  border: none;
  padding: 10px;
  border-radius: 5px;
  text-shadow: -1px 1px 0 #000;

  &:hover {
    background: #ff0070;
    transition: 0.2s ease-out;
    cursor: pointer;
    border-radius: 5px;
    color: white;
  }
`;
