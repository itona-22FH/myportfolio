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
import React from "react";

import { AccountControlButton } from "./AccountControlButton";
import { ConfirmationBtn } from "./confirmationBtn";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box w="100%" h="80px" bg="purple.300">
      <Flex
        verticalAlign="center"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
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
        <Stack direction="row" spacing={4} mr="10px">
          <Button
            onClick={onOpen}
            color="purple"
            colorScheme="whiteAlpha"
            w="130px"
          >
            ログイン
          </Button>

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>アカウント情報を入力してください</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb="6px">
                <FormControl>
                  <FormLabel>メールアドレス</FormLabel>
                  <Input
                    type="email"
                    ref={initialRef}
                    placeholder="*******@email.com"
                  />
                </FormControl>

                <FormControl mt="4px">
                  <FormLabel>パスワード</FormLabel>
                  <Input type="password" placeholder="password" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr="10px">
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <ConfirmationBtn
            text="ログアウト"
            colorScheme="whiteAlpha"
            color="purple"
            width="130px"
            confirmation="ログアウト"
          />

          <AccountControlButton
            text="マイページ"
            colorScheme="purple"
            color="white"
            width="130px"
            href="/myPage"
          />

          <AccountControlButton
            text="新規登録(無料)"
            colorScheme="purple"
            color="white"
            width="130px"
            href="/newAccount"
          />
        </Stack>
      </Flex>
    </Box>
  );
};
