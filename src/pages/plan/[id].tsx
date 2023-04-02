/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import {
  Avatar,
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  StackDivider,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AccountControlButton } from "../../components/AccountControlButton";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import ContractBtn from "../../components/ContractBtn";
import { HeadTitle } from "../../components/HeadTitle";
import { TextBox } from "../../components/TextBox";
import { useLocation, useParams } from "react-router-dom";

export default function plan() {
 
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const params = useParams();
  // console.log(params);

  return (
    <Box pt="10px">
      <Container maxW="1100px">
        <Grid
          templateAreas={`
        "nav main"
        "nav empty"
        `}
          gridTemplateRows={"300px 1fr 1px"}
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
              src="https://bit.ly/2Z4KKcF"
              alt="Rear view of modern home with pool"
              p="10px"
              borderRadius="20px"
            />

            <HeadTitle title="最速でプロの道へ！！現役プロゲーマーが直接指導！本気で強くなりたい人向けプラン！！！" />

            <VStack
              divider={<StackDivider borderColor="purple" />}
              spacing={2}
              align="top"
              mt="10px"
              p="10px"
            >
              <TextBox title="学べる内容" text="aaaaa" fontSize={""} />
              <TextBox title="指導方法" text="aaaaa" fontSize={""} />
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
                  <span style={{ color: "red" }}>2,000</span>円
                </Text>
              </Flex>
            </VStack>
            <Flex justifyContent="space-around" flexFlow="column">
              <Box w="100%" p="10px">
                <ContractBtn
                  text="プラン契約に進む"
                  colorScheme="purple"
                  color="white"
                  width="100%"
                  onClick={onOpen}
                />
              </Box>
              {/* 登録者本人の時表示 */}
              <Box w="100%" p="10px">
                <ConfirmationBtn
                  text="プランを削除する"
                  colorScheme="red"
                  color="white"
                  width="100%"
                  confirmation="削除"
                />
              </Box>
            </Flex>
          </GridItem>
          <Drawer onClose={onClose} isOpen={isOpen} size="full">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader fontSize="40px" color="purple" fontWeight="bold">
                プラン契約確認画面
              </DrawerHeader>
              <DrawerBody>
                <VStack
                  divider={<StackDivider borderColor="purple" />}
                  spacing="4px"
                  align="stretch"
                  fontWeight="bold"
                >
                  <TextBox
                    title="プラン名"
                    text="最速でプロの道へ！！現役プロゲーマーが直接指導！本気で強くなりたい人向けプラン！！！"
                    fontSize="20px"
                  />
                  <TextBox
                    title="メンター名"
                    text="Hello User"
                    fontSize="20px"
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
                      <span style={{ color: "red" }}>2,000</span>円
                    </Text>
                  </Flex>
                </VStack>
              </DrawerBody>
              <Box p="10px">
                <ConfirmationBtn
                  text="プランを契約する"
                  colorScheme="purple"
                  color="white"
                  width="100%"
                  confirmation="契約"
                />
              </Box>
            </DrawerContent>
          </Drawer>

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
              h="300px"
              flexFlow="column"
            >
              <Avatar
                size="2xl"
                name="ああ"
                src="https://bit.ly/dan-abramov"
              />
              <Link href="/profile" mt="20px" fontSize="35">
                Hello User
              </Link>
              {/* 本人以外の時表示 */}
              <Box w="100%" p="5px">
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
              </Box>
            </Flex>
          </GridItem>

          <GridItem></GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
