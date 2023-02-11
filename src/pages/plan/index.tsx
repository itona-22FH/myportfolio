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
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function plan() {
  return (
    <Box bg="purple.100">
      <Header />
      <Container maxW="1200px" mt="10">
        <Grid
          templateAreas={`
        "nav main"
        "nav main"
        `}
          gridTemplateRows={"100px 1fr 30px"}
          gridTemplateColumns={"1fr 350px"}
          gap="3"
          fontWeight="bold"
        >
          <GridItem area={"nav"} bg="whiteAlpha.800" borderRadius="10">
            <Image
              src="https://bit.ly/2Z4KKcF"
              alt="Rear view of modern home with pool"
              p="5"
              borderRadius="25"
            />
            <Heading as="h2" size="2xl" color="purple">
              プラン名
            </Heading>

            <VStack
              divider={<StackDivider borderColor="purple" />}
              spacing={2}
              align="top"
              mt="6"
              p="3"
            >
              <Box>
                <Heading as="h2" size="lg">
                  学べる内容
                </Heading>
                <Text mt="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="lg">
                  コースの流れ
                </Heading>
                <Text mt="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="lg">
                  用意するもの
                </Heading>
                <Text mt="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="lg">
                  コーチングまでの流れ
                </Heading>
                <Text mt="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.ï
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="lg" noOfLines={1}>
                  指導実績
                </Heading>
                <Text mt="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="lg" noOfLines={1}>
                  注意事項
                </Heading>
                <Text mt="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="lg" noOfLines={1}>
                  料金
                </Heading>
                <Text mt="1">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>
            </VStack>
          </GridItem>

          <GridItem
            pl="2"
            area={"main"}
            bg="whiteAlpha.800"
            p="0"
            borderRadius="10"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              wrap="wrap"
              h="300"
              flexFlow="column"
            >
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://bit.ly/dan-abramov"
              />
              <Link href="/profile" mt="5" fontSize="35" color="purple">
                Hello User
              </Link>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
