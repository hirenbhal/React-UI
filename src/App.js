import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Background>
        <Navbar />
        <Jumbotron />
      </Background>
      <MainContent />
      <Footer />
    </>
  );
};

const Background = styled.div`
background-image: linear-gradient(to bottom, #f1fefe, rgba(241, 254, 254, 0));
`;

export default App;
