import React from "react";
import Flower from "../asset/BigFlower.png";
import Leaf from "../asset/Leaf.png";

import {
  Jcontainer,
  Content,
  Heading,
  Heading2,
  Para,
  Button,
  Image1,
  Image2,
} from "./JumbotronStyles";

const Jumbotron = () => {
  return (
    <Jcontainer>
      <Content>
        <Heading2>Healthy Life with</Heading2>
        <Heading>Nature Organic</Heading>
        <Para>
          Vegetables are the edible parts of a plant <br />
          that is used in cooking or can be eaten now.
        </Para>
        <Button>Explore Now</Button>
      </Content>
      <Image1 src={Flower} alt="" />
      <Image2 src={Leaf} alt="" />
    </Jcontainer>
  );
};

export default Jumbotron;
