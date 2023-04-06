/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
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
import { useRecoilValue } from "recoil";
import { AccountControlButton } from "../../components/AccountControlButton";
import { profileCollectionAtom } from "../../components/atoms/profileCollectionAtom";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";

const profile = () => {
  //FIREBASEからすべてのプロフィール情報を取得
  const profileCollections = useRecoilValue(profileCollectionAtom);

  const router = useRouter();
  const { id } = router.query;

  const profileData = profileCollections.find((profile) => {
    if (id === profile.userID) {
      return profile;
    }
  });

  return (
    <>
      {id && profileData ? (
        <Box fontWeight="bold" pt="10px" pb="10px">
          <Container maxW="1100px">
            <Flex
              alignItems="center"
              bg="whiteAlpha.800"
              borderRadius="10px"
              p="10px"
            >
              <Avatar
                size="2xl"
                name={profileData.userName}
                src={profileData.userAvatar}
              />
              <Text mt="10px" fontSize="35" color="black" ml="10px">
                {profileData.userName}
              </Text>
            </Flex>

            <Flex
              justifyContent="space-around"
              bg="whiteAlpha.800"
              mt="10px"
              p="10px"
              borderRadius="10px"
            >
              <AccountControlButton
                text="質問をする"
                colorScheme="purple"
                color="white"
                width="400px"
                href="/"
              />
              <AccountControlButton
                text="レビューを投稿する"
                colorScheme="purple"
                color="white"
                width="400px"
                href="/"
              />
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
                  <Tab>登録プラン</Tab>
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
                        text={profileData.selfIntroduction}
                        fontSize="20px"
                      />
                      <TextBox
                        title="経歴・実績"
                        text={profileData.achievement}
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
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </Box>
      ) : (
        <div>プロフィール情報を取得できませんでした。</div>
      )}
    </>
  );
};

export default profile;
