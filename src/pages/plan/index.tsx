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
import ContractBtn from "../../components/ContractBtn";
import { HeadTitle } from "../../components/HeadTitle";
import { TextBox } from "../../components/TextBox";

export default function plan() {
  const demoText =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.DConsequat nisl vel pretium lectus quam id. Semper quis lectusnulla at volutpat diam ut venenatis. Dolor morbi non arcu risusquis varius quam quisque. Massa ultricies mi quis hendrerit dolor  magna eget est lorem. Erat imperdiet sed euismod nisi portaLectus vestibulum mattis ullamcorper velit.";

  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <GridItem area={"nav"} bg="whiteAlpha.800" borderRadius="10px" p="5px">
            <Image
              src="https://bit.ly/2Z4KKcF"
              alt="Rear view of modern home with pool"
              p="10px"
              borderRadius="20px"
            />
            {/* <Heading as="h2" size="2xl" p="10px">
              最速でプロの道へ！！現役プロゲーマーが直接指導！本気で強くなりたい人向けプラン！！！
            </Heading> */}

            <HeadTitle title="最速でプロの道へ！！現役プロゲーマーが直接指導！本気で強くなりたい人向けプラン！！！"/>

            <VStack
              divider={<StackDivider borderColor="purple" />}
              spacing={2}
              align="top"
              mt="10px"
              p="10px"
            >
              <TextBox title="学べる内容" text={demoText} fontSize={""} />
              <TextBox title="指導方法" text={demoText} fontSize={""} />
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
                <AccountControlButton
                  text="プランを削除する"
                  colorScheme="pink"
                  color="white"
                  width="100%"
                  href="/newPlan"
                />
              </Box>
            </Flex>
          </GridItem>
          <Drawer onClose={onClose} isOpen={isOpen} size="md">
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
                <AccountControlButton
                  text="プランを契約する"
                  colorScheme="purple"
                  color="white"
                  width="100%"
                  href="/"
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
                name="Segun Adebayo"
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
              </Box>
            </Flex>
          </GridItem>

          <GridItem></GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
