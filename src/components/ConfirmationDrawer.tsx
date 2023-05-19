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
  Button,
} from "@chakra-ui/react";
import React from "react";
import { StripeCheckoutModal } from "./StripeCheckoutModal";
import { TextBox } from "./TextBox";

export const ConfirmationDrawer = ({
  planData,
  profileData,
}: ConfirmationDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="purple" color="white" width="100%" onClick={onOpen}>
        プラン契約に進む
      </Button>
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
            <StripeCheckoutModal planData={planData}/>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

