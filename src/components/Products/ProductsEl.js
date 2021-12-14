import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 8rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: white;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductsCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductsImg = styled.img`
  height:auto;
  min-width: 299px;
  max-width: 100%;
  box-shadow: 8px 8px #ffa700;
  &:hover {
    height: auto;
    min-width: 320px;
    max-width: 100%;
    box-shadow: 9px 9px #ffa700;
    transition: 0.4s ease-in-out;
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  text-shadow: -1px 1px 0 #000;
`;

export const ProductsTitle = styled.div`
  font-size: 2rem;
  
`;

export const ProductsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  padding: 1rem;
  text-align: left;
  color: black;
  background: white;
  margin: 4px;
`;

export const ProductsDesc = styled.div`
  margin-bottom: 0.5rem;
  
`;

export const ProductsPrice = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
export const ProductsButton = styled.div`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #ffa700;
  color: black;
  transition: 0ms.2s ease-out;

  &:hover {
    background: #ff0096;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }
`;
