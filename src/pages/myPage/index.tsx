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
  Link,
} from "@chakra-ui/react";
import React from "react";
import { AccountControlButton } from "../../components/AccountControlButton";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";

const myPage = () => {
  const demoText =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.DConsequat nisl vel pretium lectus quam id. Semper quis lectusnulla at volutpat diam ut venenatis. Dolor morbi non arcu risusquis varius quam quisque. Massa ultricies mi quis hendrerit dolor  magna eget est lorem. Erat imperdiet sed euismod nisi portaLectus vestibulum mattis ullamcorper velit.";
  return (
    <Box pt="10px" pb="10px">
      <Container maxW="1100px">
        <Flex
          alignItems="center"
          bg="whiteAlpha.800"
          borderRadius="10px"
          p="10px"
        >
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/dan-abramov"
          />
          <Text mt="10px" fontSize="35" ml="10px" fontWeight="bold">
            Hello User
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
              <Tab>レビュー</Tab>
              <Tab>登録プラン</Tab>
              <Tab>契約中のプラン</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <VStack
                  divider={<StackDivider borderColor="purple" />}
                  spacing={2}
                  align="top"
                >
                  <TextBox title="自己紹介" text={demoText} fontSize="20px" />
                  <TextBox title="経歴・実績" text={demoText} fontSize="20px" />
                </VStack>
              </TabPanel>
              <TabPanel></TabPanel>
              <TabPanel>
                <Flex
                  align="center"
                  wrap="wrap"
                  maxW="1000px"
                  borderRadius="10px"
                >
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                  <GamePlan />
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default myPage;
