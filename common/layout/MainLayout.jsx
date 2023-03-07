import React, { useRef } from "react";
import { Header } from "../components";
import { Footer } from "../components/Footer";
import { HeaderMobile } from "../components/HeaderMobile/HeaderMobile";

export const MainLayout = ({ children }) => (
  <>
    <Header />
    <HeaderMobile />
    {children}
    <Footer />
  </>
);
