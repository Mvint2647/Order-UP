import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
position: fixed;
z-index:999;
width: 350px;
height:100%;
background: linear-gradient(to right, rgba(0, 0, 0, .9), rgba(0, 0, 0, 0.1)),
black;
opacity: 90%;
display:grid;
align-items:center;
top: 0;
transition: 0.3s ease-in-out;
right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};


@media screen and (max-width: 400px){
width:100%;
 }
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: left;
  justify-content: left;
  font-size: 2.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color:white;
  cursor: pointer;
  margin-left: 75px;

  &:hover {
    color: orange;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(Link)`
  background: #ffa700;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 5px;
  text-shadow: -1px 1px 0 #000;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #ff0096;
    color: white;
    border-radius: 5px;
   

  }
`;
