import React from "react";

export const Images = ({ url, alt, className }) => (
  <img src={url} alt={alt} class={className} />
);
