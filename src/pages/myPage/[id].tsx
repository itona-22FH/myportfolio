/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Container,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { AccountControlButton } from "../../components/AccountControlButton";
import { planCollectionAtom } from "../../lib/recoil/atoms/planCollectionAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";
import { useRouter } from "next/router";
import { UserInformation } from "../../components/UserInformation";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";

const myPage = () => {
  //FIREBASEからすべてのプロフィール情報を取得
  const profileCollections = useRecoilValue(profileCollectionAtom);

  //プラン情報の取得
  const planCollections = useRecoilValue(planCollectionAtom);

  //URLからユーザーのIDを取得
  const router = useRouter();
  const { id } = router.query;

  const loginUser = useRecoilValue(testLoginUserAtom);

  //プロフィールコレクションから自分のプロフィールデータのみを取得
  const myProfileData = profileCollections.find((profile) => {
    if (loginUser === profile.userId) {
      return profile;
    }
  });

  // ログイン中のユーザーIDと一致するプランのみでフィルターをかけ配列を生成
  const showPlan = useMemo<ShowPlan[] | undefined>(
    () =>
      myProfileData
        ? planCollections
            .filter((plan) => loginUser === plan.userId)
            .map((plan) => ({
              planId: plan.planId,
              planTitle: plan.planTitle,
              planImage: plan.planImage,
              userName: myProfileData.userName,
              price: plan.price,
              userAvatar: myProfileData.userAvatar,
              review: myProfileData.review,
              genreCategory: plan.genreCategory,
              titleCategory: plan.titleCategory,
            }))
        : undefined,
    [myProfileData]
  );

  return (
    <>
      {myProfileData && loginUser === id ? (
        <Box fontWeight="bold" pt="10px" pb="10px">
          <Container maxW="1100px">
            <Flex
              alignItems="center"
              bg="whiteAlpha.800"
              borderRadius="10px"
              p="10px"
              direction="column"
            >
              <Flex pb="10px" justifyContent="center" fontSize="50px">
                <Box color="rebeccapurple">マイページ</Box>
              </Flex>
              <UserInformation
                userId={"_"}
                userName={myProfileData.userName}
                userAvatar={myProfileData.userAvatar}
                review={myProfileData.review}
                twitterUrl={myProfileData.twitterAccount}
                youtubeUrl={myProfileData.youtubeAccount}
                contactEmail={myProfileData.contactEmail}
              />
            </Flex>

            <Flex
              justifyContent="space-around"
              bg="whiteAlpha.800"
              mt="10px"
              p="10px"
              borderRadius="10px"
            >
              <Box>
                <AccountControlButton
                  text="プロフィールを編集する"
                  colorScheme="purple"
                  color="white"
                  width="400px"
                  href={`/editProfile/${id}`}
                />
              </Box>
              <Box>
                <AccountControlButton
                  text="新規プランを登録する"
                  colorScheme="purple"
                  color="white"
                  width="400px"
                  href={`/newPlan/${id}`}
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
                      <GamePlan showPlan={showPlan} />
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </Box>
      ) : (
        <>
          <Box> ユーザー情報を取得できませんでした。</Box>
          <Link href="/">トップへもどる</Link>
        </>
      )}
    </>
  );
};

export default myPage;
