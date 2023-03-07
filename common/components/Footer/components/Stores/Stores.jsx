import React from "react";
import { AppStore, GooglePlay } from "../../../../../assets";
import { CustomLink } from "../../../CustomLink";

export const Stores = () => (
  <>
    <CustomLink
      href="https://play.google.com/store/apps/details?id=app.lanacion.activity&amp;hl=es_419"
      target="_blank"
      class="app_play"
    >
      <GooglePlay />
    </CustomLink>

    <CustomLink
      href="https://apps.apple.com/ar/app/la-nacion/id410689702"
      target="_blank"
      class="app_ios"
    >
      <AppStore />
    </CustomLink>
  </>
);
