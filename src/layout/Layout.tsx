import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box bg="purple.100" >
      {children}
      </Box>
      <Footer />
    </>
  );
};
