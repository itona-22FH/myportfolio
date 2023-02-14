import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
