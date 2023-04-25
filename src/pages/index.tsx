/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { GamePlan } from "../components/GamePlan";
import { CarouselFade } from "../components/CarouselFade";
import { CategorySearch } from "../components/CategorySearch";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { planCollectionAtom } from "../lib/recoil/atoms/planCollectionAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { showPlanAtom } from "../lib/recoil/atoms/showPlanAtom";
import React, { useEffect } from "react";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
// import { planManagementCollectionAtom } from "../lib/recoil/atoms/planManagementCollectionAtom";

const Home = () => {
  //全てのプラン情報を管理するRECOILのSTATEへのSET関数を宣言
  const setShowPlan = useSetRecoilState(showPlanAtom);

  //FIREBASEからすべてのプラン情報を取得
  const [planCollections, setPlanCollections] =
    useRecoilState(planCollectionAtom);
  const [profileCollections, setProfileCollections] = useRecoilState(
    profileCollectionAtom
  );

  // const [planPlanManagementCollections, setPlanManagementCollections] = useRecoilState(planManagementCollectionAtom);

  useEffect(() => {
    const newPlan: ShowPlan[] = [];
    //すべてのプラン情報をSTATEにセット
    profileCollections.map((profile) => {
      planCollections.map((plan) => {
        if (plan.userID === profile.userID) {
          const showPlanData = {
            planID: plan.planID,
            planTitle: plan.planTitle,
            planImage: plan.planImage,
            userName: profile.userName,
            price: plan.price,
            userAvatar: profile.userAvatar,
            reviewCount: profile.reviewCount,
            reviewScore: profile.reviewScore,
          };
          newPlan.push(showPlanData);
        }
      });
    });
    setShowPlan(newPlan);
    //   //localStorageにState連携
    //   // setPlanCollections((prev) => prev);
    //   // setProfileCollections((prev) => prev);
    //   // setPlanManagementCollections((prev) => prev);
  }, []);

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
          area={"nav"}
          bg="whiteAlpha.800"
          borderRadius="10"
          ml="10"
          p="2"
        >
          <VStack
            divider={<StackDivider borderColor="purple.300" />}
            spacing={4}
            align="stretch"
          >
            <Box h="40px">
              <span style={{ marginLeft: 10 }}>
                <SearchIcon />
                <span>カテゴリ</span>
              </span>
            </Box>
            <CategorySearch category="FPS・TPS" />
            <CategorySearch category="MOBA" />
            <CategorySearch category="格闘" />
            <CategorySearch category="スポーツ" />
            <CategorySearch category="エーペックスレジェンズ" />
          </VStack>
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
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Home;
