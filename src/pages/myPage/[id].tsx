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
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AccountControlButton } from "../../components/AccountControlButton";
import { planCollectionAtom } from "../../lib/recoil/atoms/planCollectionAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { showPlanAtom } from "../../lib/recoil/atoms/showPlanAtom";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";
import { useRouter } from "next/router";
import { UserInformation } from "../../components/UserInformation";

const myPage = () => {
  //FIREBASEからすべてのプロフィール情報を取得
  const profileCollections = useRecoilValue(profileCollectionAtom);
  const setShowPlan = useSetRecoilState(showPlanAtom);
  const planCollections = useRecoilValue(planCollectionAtom);

  const router = useRouter();
  const { id } = router.query;

  const myProfileData = profileCollections.find((profile) => {
    if (id === profile.userID) {
      return profile;
    }
  });

  // ログイン中のユーザーIDと一致するプランのみでフィルターをかけ配列を生成
  useEffect(() => {
    if (myProfileData) {
      planCollections.map((plan) => {
        if (myProfileData.userID === plan.userID) {
          const planData = {
            planID: plan.planID,
            planTitle: plan.planTitle,
            planImage: plan.planImage,
            userName: myProfileData.userName,
            price: plan.price,
            userAvatar: myProfileData.userAvatar,
            reviewCount: myProfileData.reviewCount,
            reviewScore: myProfileData.reviewScore,
          };
          setShowPlan((prev) => [...prev, planData]);
        }
      });
    }
  }, [id]);

  return (
    <>
      {myProfileData ? (
        <Box fontWeight="bold" pt="10px" pb="10px">
          <Container maxW="1100px">
            <Flex
              alignItems="center"
              bg="whiteAlpha.800"
              borderRadius="10px"
              p="10px"
              direction="column"
            >
              <UserInformation
                userID={"_"}
                userName={myProfileData.userName}
                userAvatar={myProfileData.userAvatar}
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
                  <TabPanel>
                    <Box>契約中のプランを表示</Box>
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
