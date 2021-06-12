import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top:1rem;
`;

export const Logo = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

export const LogoText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  cursor: pointer;
  margin-left: 1rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Link = styled.a`
font-family: "Poppins", sans-serif;
display: block;
  margin: 0 2rem;
  padding: 0.5rem 0;
  color:#374b5c;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #00dbd0;
  }
  }
`;

export const Button = styled.button`
    font-family: "Poppins", sans-serif;
  background:none;
  border:2px solid #00dbd0;
  color:#374b5c;
  border-radius: 10px;
  padding: 7px 20px;
  cursor: pointer;
`;
