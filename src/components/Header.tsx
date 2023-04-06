/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";

import { AccountControlButton } from "./AccountControlButton";
import { testLoginUserAtom } from "./atoms/testLoginUserAtom";
import { ConfirmationBtn } from "./ConfirmationBtn";
import { LoginModal } from "./LoginModal";

export const Header = () => {
 
  const loginStatus = useRecoilValue(testLoginUserAtom);

 

  const router = useRouter();
  const { id } = router.query;
  const { pathname } = router;

  return (
    <Box w="100%" h="80px" bg="purple.300">
      <Flex
        verticalAlign="center"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        {id || pathname !== "/" ? (
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              colorScheme="linkedin"
              variant="outline"
              ml="10px"
              color="purple"
              w="130px"
            >
              トップへ戻る
            </Button>
          </Link>
        ) : (
          <div></div>
        )}

        <Stack direction="row" spacing={4} mr="10px">
          {loginStatus === "" && (
            <>
              <LoginModal />
            </>
          )}

          {loginStatus !== "" && (
            <>
              <ConfirmationBtn
                text="ログアウト"
                colorScheme="whiteAlpha"
                color="purple"
                width="130px"
                confirmation="ログアウト"
              />
            </>
          )}

          {loginStatus !== "" && (
            <>
              <AccountControlButton
                text="マイページ"
                colorScheme="purple"
                color="white"
                width="130px"
                href="/myPage"
              />
            </>
          )}

          {loginStatus === "" && (
            <>
              <AccountControlButton
                text="新規登録(無料)"
                colorScheme="purple"
                color="white"
                width="130px"
                href="/newAccount"
              />
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
