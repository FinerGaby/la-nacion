import React from "react";
import { DataFiscal } from "./components";
import { Captcha } from "./components/Captcha";
import { Social } from "./components/Social";
import { Stores } from "./components/Stores";
import { links, linksSocial } from "./helpers/links";

export const Footer = () => {
  return (
    <footer>
      <div class="lay">
        <section class="row footer-header">
          <section class="col-desksm-4 col-desk-6 footer-header__logo">
            <a href="https://www.lanacion.com.ar/" class="">
              <i class="logo-la-nacion"></i>
            </a>
          </section>
          <section class="col-12 col-desksm-4 col-desk-3 footer-header__redes">
            <Social list={linksSocial} />
          </section>
          <section class="col-12 col-desksm-4 col-desk-3 footer-header__app">
            <Stores />
          </section>
        </section>
        <section class="row footer-sitio">
          <section class="col-desksm-9 col-deskxl-8 footer-sitio__links">
            <Social list={links} />
          </section>
          <section class="col-desksm-3 col-deskxl-4 footer-sitio__captcha">
            <Captcha />
          </section>
        </section>
        <section class="row footer-copyright">
          <section class="col-desksm-6 col-desk-6 footer-copyright__fiscal">
            <DataFiscal />
          </section>
          <section class="col-desksm-6 col-desk-6 footer-copyright__reserved">
            <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
          </section>
        </section>
      </div>
    </footer>
  );
};
