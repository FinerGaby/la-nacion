import React from "react";
import { Title } from "../Title";

export const Button = ({ className, title = "", classTitle }) => (
  <button class={className}>
    <Title title={title} classTitle={classTitle} />
  </button>
);
