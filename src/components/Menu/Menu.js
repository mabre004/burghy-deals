import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Home
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        About Us
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Contact
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Sell
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Log out
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
