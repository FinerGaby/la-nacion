import React from "react";
import { NavMobile } from "./components/NavMobile";

export const HeaderMobile = () => {
  return (
    <>
      <header class="header-mobile">
        <div class="lay">
          <div class="row">
            <div class="col-6">
              <a href="/" class="header-mobile__logo">
                <i class="logo-la-nacion"></i>
              </a>
            </div>
            <div class="col-6 hlp-text-right">
              <a>Suscribite</a>
            </div>
          </div>
        </div>
      </header>
      <NavMobile />
    </>
  );
};
