/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
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
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { AccountControlButton } from "../../components/AccountControlButton";
import { planCollectionAtom } from "../../lib/recoil/atoms/planCollectionAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";
import { UserInformation } from "../../components/UserInformation";
import { PostReviewModal } from "../../components/PostReviewModal";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";

const profile = () => {
  //FIREBASEからすべてのプロフィール情報を取得
  const profileCollections = useRecoilValue(profileCollectionAtom);
  const planCollections = useRecoilValue(planCollectionAtom);

  //URLからUSERのIDを取得
  const router = useRouter();
  const { id } = router.query;

  const loginUser = useRecoilValue(testLoginUserAtom);

  //取得したIDと一致するPROFILEをPROFILEDATAに代入
  const profileData = profileCollections.find((profile) => {
    if (id === profile.userId) {
      return profile;
    }
  });

  // ログイン中のユーザーIDと一致するプランのみでフィルターをかけ配列を生成
  const showPlan = useMemo<ShowPlan[] | undefined>(
    () =>
      profileData
        ? planCollections
            .filter((plan) => profileData.userId === plan.userId)
            .map((plan) => ({
              planId: plan.planId,
              planTitle: plan.planTitle,
              planImage: plan.planImage,
              userName: profileData.userName,
              price: plan.price,
              userAvatar: profileData.userAvatar,
              review: profileData.review,
              genreCategory: plan.genreCategory,
              titleCategory: plan.titleCategory,
            }))
        : undefined,
    [profileData]
  );

  return (
    <>
      {profileData ? (
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
                <Box color="rebeccapurple">プロフィールページ</Box>
              </Flex>
              <UserInformation
                userId={"_"}
                userName={profileData.userName}
                userAvatar={profileData.userAvatar}
                review={profileData.review}
                twitterUrl={profileData.twitterAccount}
                youtubeUrl={profileData.youtubeAccount}
              />
            </Flex>
            {loginUser !== "" && (
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
                <PostReviewModal
                  text="レビューを投稿する"
                  colorScheme="purple"
                  color="white"
                  width="400px"
                  userId={profileData.userId}
                />
              </Flex>
            )}

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
          <Box>プロフィール情報を取得できませんでした。</Box>
          <Link href="/">トップへもどる</Link>
        </>
      )}
    </>
  );
};

export default profile;
