import React from "react";

import { FooterContainer,Column,Image,Para,Line,Title,SocialLogos,Link } from "./FooterStyles";


import Logo from "../asset/Logo.png";
import Facebook from '../asset/Facebook.png';
import LinkedIn from '../asset/LinkedIn.png';
import Instagram from '../asset/Instagram.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Image Logo src={Logo} alt="Logo" />
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          elit, sed do eiusmod tempor{" "}
        </Para>
        <Line />
        <Title>© Copyright 2020 Nature</Title>
      </Column>
      <Column>
        <Title>Information</Title>
        <Line info />
        <Link>About Us</Link>
        <Link>Products</Link>
        <Link>Contact Us</Link>
        <Link>Terms of Service</Link>
      </Column>
      <Column last>
      <Title>Follow Us</Title>
        <Line info />
        <SocialLogos>
            <Image Social src={Facebook} />
            <Image Social src={LinkedIn} />
            <Image src={Instagram} />
        </SocialLogos>
      </Column>
    </FooterContainer>
  );
};


export default Footer;
