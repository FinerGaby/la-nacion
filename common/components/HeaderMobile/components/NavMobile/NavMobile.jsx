import React from "react";
import { useScrollPos } from "../../../../hook/useScrollPos";

export const NavMobile = () => {
  const { headerMobileRef } = useScrollPos();

  return (
    <nav class="com-nav-mobile" ref={headerMobileRef}>
      <div class="row">
        <a href="" class="col-2 item-foo">
          <i class="icon-home"></i>
          <p>Home</p>
        </a>
        <a href="" class="col-4 item-foo">
          <i class="icon-club"></i>
          <p>
            {" "}
            <nobr>Club LA NACION</nobr>
          </p>
        </a>
        <a href="" class="col-3 item-foo">
          <i class="icon-comment"></i>
          <p>Mi cuenta</p>
        </a>
        <button class="col-2 item-foo">
          <i class="icon-menu"></i>
          <p>Menú</p>
        </button>
      </div>
    </nav>
  );
};
