/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { GamePlan } from "../components/GamePlan";
import { CarouselFade } from "../components/CarouselFade";
import { Category } from "../components/Category";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* carousel image */}
      <CarouselFade />

      {/* mainContents */}
      <Grid
        templateAreas={`
                  "nav main"
                  "footer footer"`}
        gap="2"
        fontWeight="bold"
        gridTemplateColumns={"300px 1fr"}
        mt="3"
      >
        {/* search category */}
        <GridItem
          pl="2"
          area={"nav"}
          bg="whiteAlpha.800"
          borderRadius="10"
          ml="10"
        >
          <Category />
        </GridItem>

        {/* show plan */}
        <GridItem pl="2" area={"main"} ml="1">
          <Flex
            align="center"
            wrap="wrap"
            bg="whiteAlpha.800"
            maxW="1000px"
            borderRadius="10"
          >
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
            <GamePlan />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
