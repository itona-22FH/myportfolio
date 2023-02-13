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
import React from "react";
import { GamePlan } from "../../components/GamePlan";
import { TextBox } from "../../components/TextBox";

export default function profile() {
  return (
    <Box bg="purple.100" fontWeight="bold" pt="5" pb="5">
      <Container maxW="1100px">
        <Flex alignItems="center" bg="whiteAlpha.800" borderRadius="10" p="5">
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/dan-abramov"
          />
          <Text mt="5" fontSize="35" color="purple" ml="10">
            Hello User
          </Text>
        </Flex>

        <Box h="100%" bg="whiteAlpha.800" mt="5" borderRadius="10" p="5">
          <Tabs colorScheme="purple">
            <TabList>
              <Tab>プロフィール</Tab>
              <Tab>レビュー</Tab>
              <Tab>登録プラン</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <VStack
                  divider={<StackDivider borderColor="purple" />}
                  spacing={2}
                  align="top"
                  mt="6"
                  p="3"
                >
                  <TextBox title="自己紹介" />
                  <TextBox title="経歴・実績" />
                </VStack>
              </TabPanel>
              <TabPanel></TabPanel>
              <TabPanel>
                <Flex
                  align="center"
                  wrap="wrap"
                  maxW="1000px"
                  borderRadius="10"
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
}
