/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  StackDivider,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { AccountControlButton } from "../../components/AccountControlButton";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { HeadTitle } from "../../components/HeadTitle";
import { TextBox } from "../../components/TextBox";
import { useRouter } from "next/router";
import { planCollectionAtom } from "../../lib/recoil/atoms/planCollectionAtom";
import { useRecoilValue } from "recoil";
import { ConfirmationDrawer } from "../../components/ConfirmationDrawer";
import { UserInformation } from "../../components/UserInformation";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { PostReviewModal } from "../../components/PostReviewModal";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase/firebaseConfig";

const plan = () => {
  //planCollectionsのSTATEを取得
  const planCollections = useRecoilValue(planCollectionAtom);

  //プロフィールコレクションを取得
  const profileCollections = useRecoilValue(profileCollectionAtom);

  //ログイン中のユーザーのID取得
  const loginUser = useRecoilValue(testLoginUserAtom);

  //URLからプランのIDを取得
  const router = useRouter();
  const { id } = router.query;

  //取得したIDと一致するプランのみをplanDataに代入
  const planData = planCollections.find((plan) => {
    if (id === plan.planId) {
      return plan;
    }
  });

  //planDataの持つuserIdと一致するプロフィール情報を取得
  const profileData = profileCollections.find((profile) => {
    if (planData?.userId === profile.userId) {
      return profile;
    }
  });

  //プラン削除
  const deletePlanHandle = async () => {
    await deleteDoc(doc(db, "planCollection", planData?.planId as string));
    router.push("/");
  };

  return (
    <>
      {planData && profileData ? (
        <Box pt="10px" pb="10px">
          <Container maxW="1100px">
            <Grid
              templateAreas={`
                      "nav main"
                      "nav empty"
                    `}
              gridTemplateRows={"400px 1fr"}
              gridTemplateColumns={"1fr 400px"}
              gap="10px"
              fontWeight="bold"
            >
              <GridItem
                area={"nav"}
                bg="whiteAlpha.800"
                borderRadius="10px"
                p="5px"
              >
                <Image
                  src={planData.planImage}
                  alt="Rear view of modern home with pool"
                  p="10px"
                  borderRadius="20px"
                />

                <HeadTitle title={planData.planTitle} />

                <VStack
                  divider={<StackDivider borderColor="purple" />}
                  spacing={2}
                  align="top"
                  mt="10px"
                  p="10px"
                >
                  <TextBox
                    title="学べる内容"
                    text={planData.study}
                    fontSize={""}
                  />
                  <TextBox
                    title="指導方法"
                    text={planData.guidance}
                    fontSize={""}
                  />
                  <Flex
                    justifyContent="space-between"
                    mt="20px"
                    mb="20px"
                    alignItems="center"
                  >
                    <Heading as="h3" size="lg">
                      プラン料金
                    </Heading>
                    <Text ml="30px" fontSize="40px">
                      <span style={{ color: "red" }}>
                        {Number(planData.price).toLocaleString()}
                      </span>
                      円
                    </Text>
                  </Flex>
                </VStack>
                <Flex justifyContent="space-around" flexFlow="column">
                  <Box w="100%" p="10px">
                    {loginUser !== planData.userId && loginUser !== "" && (
                      <ConfirmationDrawer
                        planData={planData}
                        profileData={profileData}
                      />
                    )}
                    {/* 登録者本人の時表示 */}
                    {loginUser === planData.userId && (
                      <ConfirmationBtn
                        text="プランを削除する"
                        colorScheme="red"
                        color="white"
                        width="100%"
                        confirmation="削除"
                        handleConfirmation={deletePlanHandle}
                      />
                    )}
                  </Box>
                </Flex>
              </GridItem>

              <GridItem
                pl="2px"
                area={"main"}
                bg="whiteAlpha.800"
                borderRadius="10"
                p="0"
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  wrap="wrap"
                  h="400px"
                  flexFlow="column"
                >
                  <UserInformation
                    userId={planData.userId}
                    userName={profileData.userName}
                    userAvatar={profileData.userAvatar}
                    review={profileData.review}
                    twitterUrl={profileData.twitterAccount}
                    youtubeUrl={profileData.youtubeAccount}
                    contactEmail={profileData.contactEmail}
                    />
                  {/* 本人以外の時表示 */}
                  <Box w="100%" p="5px">
                    {loginUser !== planData.userId && loginUser !== "" && (
                      <>
                        <AccountControlButton
                          text="質問をする"
                          colorScheme="purple"
                          color="white"
                          width="100%"
                          href="/"
                        />
                        <Box m="10px"></Box>
                        <PostReviewModal
                          text="レビューを投稿する"
                          colorScheme="purple"
                          color="white"
                          width="100%"
                          userId={profileData.userId as string}
                        />
                      </>
                    )}
                  </Box>
                </Flex>
              </GridItem>
              <GridItem></GridItem>
            </Grid>
          </Container>
        </Box>
      ) : (
        <>
          <Box>プラン情報の取得に失敗しました。</Box>
          <Link href="/">トップへもどる</Link>
        </>
      )}
    </>
  );
};

export default plan;
