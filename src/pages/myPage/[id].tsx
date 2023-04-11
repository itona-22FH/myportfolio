/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Box,
  Container,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AccountControlButton } from "../../components/AccountControlButton";
import { planCollectionAtom } from "../../lib/recoil/atoms/planCollectionAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { showGamePlanAtom } from "../../lib/recoil/atoms/showGamePlanAtom";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";
import { ReviewStatus } from "../../components/ReviewStatus";
import { useRouter } from "next/router";

const myPage = () => {
  //FIREBASEからすべてのプロフィール情報を取得
  const profileCollections = useRecoilValue(profileCollectionAtom);
  //テスト用ログインユーザーID
  const testUserId = useRecoilValue(testLoginUserAtom);

  const setShowGamePlan = useSetRecoilState(showGamePlanAtom);
  const planCollections = useRecoilValue(planCollectionAtom);

  // ログイン中のユーザーIDと一致するプランのみでフィルターをかけ配列を生成
  setShowGamePlan(
    planCollections.filter((plan) => {
      if (testUserId === plan.userID) {
        return plan;
      }
    })
  );

  const router = useRouter();
  const { id } = router.query;

  const myProfileData = profileCollections.find((profile) => {
    if (id === profile.userID) {
      return profile;
    }
  });

  return (
    <>
      {myProfileData ? (
        <Box pt="10px" pb="10px">
          <Container maxW="1100px">
            <Flex
              alignItems="center"
              bg="whiteAlpha.800"
              borderRadius="10px"
              p="10px"
              direction="column"
            >
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src={myProfileData.userAvatar}
              />
              <Text mt="10px" fontSize="35" ml="10px" fontWeight="bold">
                {myProfileData.userName}
              </Text>
              <ReviewStatus
                reviewCount={myProfileData.reviewCount}
                reviewScore={myProfileData.reviewScore}
              />
            </Flex>

            <Flex
              justifyContent="space-around"
              bg="whiteAlpha.800"
              mt="10px"
              p="10px"
              borderRadius="10px"
              w="100%"
            >
              <Box>
                <AccountControlButton
                  text="プロフィールを編集する"
                  colorScheme="purple"
                  color="white"
                  width="400px"
                  href="/editProfile"
                />
              </Box>
              <Box>
                <AccountControlButton
                  text="新規プランを登録する"
                  colorScheme="purple"
                  color="white"
                  width="400px"
                  href="/newPlan"
                />
              </Box>
            </Flex>

            <Box
              h="100%"
              bg="whiteAlpha.800"
              mt="10px"
              borderRadius="10px"
              p="10px"
            >
              <Tabs colorScheme="purple">
                <TabList>
                  <Tab>プロフィール</Tab>
                  <Tab>登録中のプラン</Tab>
                  <Tab>契約プラン履歴</Tab>
                </TabList>

                <TabPanels fontWeight="bold">
                  <TabPanel>
                    <VStack
                      divider={<StackDivider borderColor="purple" />}
                      spacing={2}
                      align="top"
                    >
                      <TextBox
                        title="自己紹介"
                        text={myProfileData.selfIntroduction}
                        fontSize="20px"
                      />
                      <TextBox
                        title="経歴・実績"
                        text={myProfileData.achievement}
                        fontSize="20px"
                      />
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                    <Flex
                      align="center"
                      wrap="wrap"
                      maxW="1000px"
                      borderRadius="10px"
                    >
                      <GamePlan />
                    </Flex>
                  </TabPanel>
                  <TabPanel></TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </Box>
      ) : (
        <>
          <Box> ユーザー情報を取得できませんでした。</Box>
        </>
      )}
      ;
    </>
  );
};

export default myPage;