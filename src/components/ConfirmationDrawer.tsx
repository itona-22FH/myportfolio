import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  StackDivider,
  Flex,
  Heading,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { ConfirmationBtn } from "./ConfirmationBtn";
import ContractBtn from "./ContractBtn";
import { TextBox } from "./TextBox";

export const ConfirmationDrawer = ({
  planData,
  profileData,
}: ConfirmationDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ContractBtn
        text="プラン契約に進む"
        colorScheme="purple"
        color="white"
        width="100%"
        onClick={onOpen}
      />
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
                text={planData.planTitle}
                fontSize="20px"
              />
              <TextBox
                title="メンター名"
                text={profileData.userName}
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
                  <span style={{ color: "red" }}>
                    {Number(planData.price).toLocaleString()}
                  </span>
                  円
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
              handleConfirmation={() => {}}
            />
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};
