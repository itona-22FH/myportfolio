/* eslint-disable react/jsx-no-undef */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../layout/Layout";
import { RecoilRoot } from "recoil";
import React from "react";
import CSR from "../components/CSR";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CSR>
    <RecoilRoot>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
    </CSR>
  );
}
