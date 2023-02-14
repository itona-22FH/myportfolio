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
} from "@chakra-ui/react";
import React from "react";
import { TextBox } from "../../components/TextBox";

export default function plan() {
  return (
    <Box bg="purple.100" pt="10">
      <Container maxW="1200px">
        <Grid
          templateAreas={`
        "nav main"
        "nav empty"
        `}
          gridTemplateRows={"300px 1fr 30px"}
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
              <TextBox title="学べる内容" />
              <TextBox title="プラン内容" />
              <TextBox title="料金" />
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

          <GridItem></GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
