import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  margin: 25rem auto 0 auto;
  text-align: center;
`;
export const Heading = styled.h2`
  font-family: "Poppins", sans-serif;
  color:  ${(props) => (props.Card ? "#00dbd0" : " #374b5c")}; 
  font-size: ${(props) => (props.Card ? "18px" : " 36px")}; 
  margin-top: ${(props) => (props.proudly ? "5rem" : "")};
`;
export const Para = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
  margin: 2rem 0 ${(props) => (props.JaneDoe ? "15rem" : "2rem")} 0;
  line-height: ${(props) => (props.JaneDoe ? "40px" : "")};
`;

export const ImgCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Image = styled.img`
  margin: ${props => props.Card ? "1rem" : "0"} 2rem;
  border-top-right-radius:${props => props.Card ? "30px" : ""};
  border-top-left-radius:${props => props.Card ? "30px" : ""};
`;

export const ImageLong = styled.img`
  position: absolute;
  right: 76rem;
  top: 52rem;
  height: 1293px;
`;

export const ImageWomen = styled.img`
  width: 97.6px;
  height: 97.6px;
  margin: 2rem auto;
  border-radius: 50%;
`;
export const Input = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #374b5c;
  margin-right: 4rem;
  padding: 7px 20px;
  border: none;
  outline: none;
  margin-bottom: 10rem;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  border: 2px solid #00dbd0;
  background-color: #00dbd0;
  color: white;
  padding: 21px 45.5px 24px;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 10rem;
`;

export const Line = styled.hr`
width: 10%;
  height: 0;
  margin: 0 auto;
  border: solid 2px #00dbd0;
  text-align:center;
`

export const CardContainer = styled.div`
display:flex;
flex-direction:row;
margin:0 0 5rem 12.5rem;
`

export const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

export const Button2 = styled.button`
    font-family: "Poppins", sans-serif;
  background:none;
  font-size:18px;
   border:none; 
  color:#00dbd0;
  padding: 7px 0;
  cursor: pointer;
`;
