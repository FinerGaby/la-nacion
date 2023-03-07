import React, { useState } from "react";
import { Form } from "../Form";
import { Logo, Menu, UsersPublic } from "./components";
import { useScrollPos } from "../../hook/useScrollPos";

export const Header = () => {
  const { headerRef } = useScrollPos();
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header
      className={`header {${isMenuActive ? " --active-menu" : ""} ${
        activeSearch ? "--active-search" : ""
      }`}
      ref={headerRef}
    >
      <div class="lay">
        <div class="row">
          <div class="col-4 header__left">
            <Menu handleMenu={handleMenu} />
            <Form
              classNameForm="com-search"
              type="text"
              classNameInput="com-search__input"
              placeholder="Buscar"
              onFocus={() => setActiveSearch(true)}
              onBlur={() => setActiveSearch(false)}
              icon="icon-search"
              handleChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <div class="col-4  header__middle">
            <Logo />
          </div>
          <div class="col-4 header__right">
            <UsersPublic />
          </div>
        </div>
      </div>
    </header>
  );
};
