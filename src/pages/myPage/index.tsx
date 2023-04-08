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
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AccountControlButton } from "../../components/AccountControlButton";
import { planCollectionAtom } from "../../lib/recoil/atoms/planCollectionAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { showGamePlanAtom } from "../../lib/recoil/atoms/showGamePlanAtom";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";

const myPage = () => {
  //FIREBASEからすべてのプロフィール情報を取得
  const profileCollections = useRecoilValue(profileCollectionAtom);
  //テスト用ログインユーザーID
  const testLoginUser = useRecoilValue(testLoginUserAtom);

  const setShowGamePlan = useSetRecoilState(showGamePlanAtom);
  const planCollections = useRecoilValue(planCollectionAtom);

  // ログイン中のユーザーIDと一致するプランのみでフィルターをかけ配列を生成
  setShowGamePlan(
    planCollections.filter((plan) => {
      if (testLoginUser === plan.userID) {
        return plan;
      }
    })
  );

  return (
    <>
      {profileCollections.map(
        ({
          userID,
          userName,
          userAvatar,
          selfIntroduction,
          achievement,
        }) => (
          <>
            {userID === testLoginUser && (
              <Box pt="10px" pb="10px">
                <Container maxW="1100px">
                  <Flex
                    alignItems="center"
                    bg="whiteAlpha.800"
                    borderRadius="10px"
                    p="10px"
                  >
                    <Avatar size="2xl" name="Segun Adebayo" src={userAvatar} />
                    <Text mt="10px" fontSize="35" ml="10px" fontWeight="bold">
                      {userName}
                    </Text>
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

                      <TabPanels>
                        <TabPanel>
                          <VStack
                            divider={<StackDivider borderColor="purple" />}
                            spacing={2}
                            align="top"
                          >
                            <TextBox
                              title="自己紹介"
                              text={selfIntroduction}
                              fontSize="20px"
                            />
                            <TextBox
                              title="経歴・実績"
                              text={achievement}
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
            )}
          </>
        )
      )}
    </>
  );
};

export default myPage;
