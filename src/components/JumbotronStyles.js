import styled from "styled-components";

export const Jcontainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
margin:7rem 45rem 0 0;
`;

export const Heading2 = styled.p`
font-family: "Poppins", sans-serif;
color: #374b5c;
font-size:36px;

`

export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 56px;
  font-weight: bold;
  color: #374b5c;
  font-size: 56px;
  margin-bottom:2rem;
`;

export const Para = styled.p`
font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
  margin-bottom:1rem;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  border: none;
  color: white;
  margin-top:1rem;
  border-radius: 10px;
  background-color: #00dbd0;
  padding: 14px 64px 16px 48px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
position: relative; 
left: 0; 
top: 0;
`;

export const Image1 = styled.img`
  border: 3px solid #00dbd0;
  padding:4rem;
  position: absolute;
  left:60rem;
  top:15rem;
`;

export const Image2 = styled.img`
position: absolute;
  left: 45rem;
  top: 15rem;

`;
