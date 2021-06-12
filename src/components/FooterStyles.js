import styled from "styled-components";
import BG from "../asset/BG.png";


export const Line = styled.hr`
  width: 77px;
  height: 0;
  border: solid 2px #00dbd0;
  margin: 1rem 0 ${props => props.info ? "0" : "2rem"} 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: flex-start;
  margin-bottom:${props => props.last ? "6rem":"0"};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  background-image: url(${BG});
  padding-bottom: 3rem;
`;

export const Para = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: white;
  margin-top: 2rem;
`;
export const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: white;
`;

export const Image = styled.img`
  margin-top: ${props => props.Logo ? "5rem" : "1rem"};
  margin-right:${props => props.Social ? "1rem" : "0"};
`;

export const Link = styled.a`
font-family: "Poppins", sans-serif;
display: block;
  padding: 0.5rem 0;
  color:white;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #00dbd0;
  }
  }
`;

export const SocialLogos = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
`