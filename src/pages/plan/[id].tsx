/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  StackDivider,
  VStack,
  Text,
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
import { StarIcon } from "@chakra-ui/icons";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";
import { ReviewStatus } from "../../components/ReviewStatus";

const plan = () => {
  const planCollections = useRecoilValue(planCollectionAtom);
  const testUserId = useRecoilValue(testLoginUserAtom);

  //URLからPLANのIDを取得
  const router = useRouter();
  const { id } = router.query;

  //取得したIDと一致するプランのみをPLANDATAに代入
  const planData = planCollections.find((plan) => {
    if (id === plan.planID) {
      return plan;
    }
  });

  return (
    <>
      {planData ? (
        <Box pt="10px">
          <Container maxW="1100px">
            <Grid
              templateAreas={`
                      "nav main"
                      "nav empty"
                    `}
              gridTemplateRows={"350px 1fr 1px"}
              gridTemplateColumns={"1fr 350px"}
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
                      <span style={{ color: "red" }}>{planData.price}</span>円
                    </Text>
                  </Flex>
                </VStack>
                <Flex justifyContent="space-around" flexFlow="column">
                  <Box w="100%" p="10px">
                    {testUserId !== planData.userID && (
                      <ConfirmationDrawer planData={planData} />
                    )}
                  </Box>
                  {/* 登録者本人の時表示 */}
                  <Box w="100%" p="10px">
                    {testUserId === planData.userID && (
                      <ConfirmationBtn
                        text="プランを削除する"
                        colorScheme="red"
                        color="white"
                        width="100%"
                        confirmation="削除"
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
                  h="350px"
                  flexFlow="column"
                >
                  <Link
                    href={
                      testUserId === planData.userID
                        ? `/myPage/${testUserId}`
                        : `/profile/${planData.userID}`
                    }
                    borderRadius="100px"
                  >
                    <Avatar
                      size="2xl"
                      name={planData.userName}
                      src={planData.userAvatar}
                    />
                  </Link>

                  <Link
                    href={
                      testUserId === planData.userID
                        ? `/myPage/${testUserId}`
                        : `/profile/${planData.userID}`
                    }
                    mt="5px"
                    fontSize="35px"
                  >
                    {planData.userName}
                  </Link>
                  <ReviewStatus
                    reviewCount={planData.reviewCount}
                    reviewScore={planData.reviewScore}
                  />
                  {/* 本人以外の時表示 */}
                  <Box w="100%" p="5px">
                    {testUserId !== planData.userID && (
                      <>
                        <AccountControlButton
                          text="質問をする"
                          colorScheme="purple"
                          color="white"
                          width="100%"
                          href="/"
                        />
                        <Box m="10px"></Box>
                        <AccountControlButton
                          text="レビューを投稿する"
                          colorScheme="purple"
                          color="white"
                          width="100%"
                          href="/"
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
        </>
      )}
    </>
  );
};

export default plan;
