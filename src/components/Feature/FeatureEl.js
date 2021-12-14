import styled from "styled-components"
import ssfeature1 from "../../images/ssfeature1.jpg"

export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0 , 0, 0.7), rgba(0, 0, 0, 0.1)),
url(${ssfeature1});
height:100vh;
max-height: 700px;
background-position:center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:black;
text-align:center;
padding: 0 1rem;

h1 {
    color:white;
    margin-bottom:1rem;
    font-size: clamp(3rem, 5vw, 5rem);
    text-shadow: -1px 1px 0 #000;
}

p {
    color:white;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 3vw, 2rem);
    text-shadow: -1px 1px 0 #000;
}
h3 {
    color:white;
    margin-bottom:1rem;
    font-size: clamp(3rem, 5vw, 5rem);
    text-shadow: -1px 1px 0 #000;
}

`
export const FeatureButton = styled.button`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
background: #ffa700;
color: white;
text-shadow: -1px 1px 0 #000;
transition: 0.2s ease-out;

&:hover{
color: white;
background: #ff0096;
transition: 0.2s ease-out;
cursor: pointer;
}
`
