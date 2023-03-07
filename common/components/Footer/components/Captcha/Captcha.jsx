import React from "react";
import { CustomLink } from "../../../CustomLink";

export const Captcha = () => (
  <p>
    Protegido por re CAPTCHA:{" "}
    <CustomLink
      href="https://policies.google.com/terms?hl=es-419"
      target="_blank"
      class="condition"
    >
      Condiciones
    </CustomLink>
    <CustomLink
      href="https://policies.google.com/privacy?hl=es-419"
      target="_blank"
      class="private"
    >
      Privacidad
    </CustomLink>
  </p>
);
