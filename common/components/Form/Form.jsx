import React from "react";
import { Button } from "../Button";
import { Icons } from "../Icons";
import { Input } from "../Input";

export const Form = ({
  classNameForm,
  classNameInput,
  placeholder,
  handleChange,
  value,
  icon,
  type,
  ...rest
}) => {
  return (
    <form class={classNameForm}>
      <Input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        {...rest}
      />
      <Icons icon={icon} />
      <Button
        type="submit"
        title="Buscar"
        className="--btn --primary com-search__submit"
      />
    </form>
  );
};
