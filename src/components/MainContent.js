import React from "react";
import styled from "styled-components";

import {
  Container,
  Image,
  Para,
  Heading,
  ImgCards,
  ImageWomen,
  ImageLong,
  Input,
  CardContainer,
  Card,
  Button,
  Button2,
  Line,
} from "./MainContentStyles";

import Leaves from "../asset/Leaves.png";
import Food from "../asset/Food.png";
import FoodBG from "../asset/FoodBG.png";
import Img1 from "../asset/Img1.png";
import Img2 from "../asset/Img2.png";
import Img3 from "../asset/Img3.png";
import Qoute from "../asset/Qoute.png";
import women from "../asset/women.png";
import LongLeaf from "../asset/LongLeaf.png";
import Pot from "../asset/Pot.jpg";
import Eucalyptus from "../asset/Eucalyptus.jpg";
import Bottle from "../asset/Bottle.jpg";

const MainContent = () => {
  return (
    <Container>
      <Image src={Leaves} alt="Leaves" />
      <Heading>Welcome to Nature</Heading>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        <br />
        incididunt ut labore et dolore magna aliqua.
      </Para>
      <div>
        <Image src={Food} alt="Food" />
        <Image src={FoodBG} alt="Food" />
        <Image src={Food} alt="Food" />
        <Image src={Food} alt="Food" />
      </div>
      <Heading proudly>Proudly Presented by</Heading>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        <br />
        incididunt ut labore et dolore magna aliqua.
      </Para>
      <ImgCards>
        <Image src={Img1} alt="Food" />
        <Image src={Img3} alt="Food" />
        <Image src={Img2} alt="Food" />
        <Image src={Img3} alt="Food" />
        <Image src={Img1} alt="Food" />
      </ImgCards>
      <Image src={Qoute} alt="Qoute" />
      <br />
      <ImageWomen src={women} alt="Women" />
      <Heading>Jane Doe</Heading>
      <Para JaneDoe>
        Thank you for all the amazing produce and products you deliver each
        week…
        <br />
        you make my life so easy an bring goodness into our family eating.
        <br />
        I’ve been roasting a lot of brussel sprouts and
      </Para>
      <ImageLong src={LongLeaf} alt="Qoute" />
      <Heading proudly>Subscribe to Our Newsletter</Heading>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        <br />
        incididunt ut labore et dolore magna aliqua.
      </Para>
      <Input placeholder="Enter your email address" />
      <Button>Subscribe</Button>
      <br />
      <Image src={Leaves} alt="Leaves" />
      <Heading>Read our Blog</Heading>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        <br />
        incididunt ut labore et dolore magna aliqua.
      </Para>

      <CardContainer>
        <Card>
          <Image Card src={Eucalyptus} />
          <Heading Card>Blog Post One</Heading>
          <Para>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed
            <br />
            do eiusmod.
          </Para>
          <Button2>Read More</Button2>
          <Line />
        </Card>
        <Card>
          <Image Card src={Pot} />
          <Heading Card>Blog Post One</Heading>
          <Para>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed
            <br />
            do eiusmod.
          </Para>
          <Button2>Read More</Button2>
          <Line />
        </Card>
        <Card>
          <Image Card src={Bottle} />
          <Heading Card>Blog Post One</Heading>
          <Para>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed
            <br />
            do eiusmod.
          </Para>
          <Button2>Read More</Button2>
          <Line />
        </Card>
      </CardContainer>
    </Container>
  );
};

export default MainContent;
