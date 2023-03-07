import React from "react";

export const Menu = ({ handleMenu }) => (
  <div class="com-hamburger" onClick={handleMenu}>
    <span class="com-hamburger__bar"></span>
    <span class="com-hamburger__bar"></span>
    <span class="com-hamburger__bar"></span>
  </div>
);
