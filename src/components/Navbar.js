import React from "react";

import { Nav, LogoText, Logo, Menu, Link, Button } from "./NavStyles";
import Flower from "../asset/NavFlower.png";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={Flower} alt="" />
        <LogoText>organic</LogoText>
      </Logo>

      <Menu>
        <Link>Home</Link>
        <Link>Product</Link>
        <Link>Blog</Link>
        <Link>About Us</Link>
        <Button>Contact</Button>
      </Menu>
    </Nav>
  );
};

export default Navbar;
