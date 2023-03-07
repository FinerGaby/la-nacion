import React from "react";

export const Input = ({
  type,
  className,
  placeholder = "",
  value,
  handleChange,
  ...rest
}) => {
  return (
    <input
      type={type}
      class={className}
      placeholder={placeholder}
      value={value}
      onChange={(_value) => handleChange(_value)}
      {...rest}
    />
  );
};
