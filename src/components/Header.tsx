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
        <Link href="/">
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            ml="10"
            color="purple"
            w="130px"
          >
            トップへ戻る
          </Button>
        </Link>
        <Stack direction="row" spacing={4} mr="10">
          {/* <AccountControlButton
            text="ログイン"
            colorScheme="whiteAlpha"
            color="purple"
            width="130px"
            /> */}
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
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>メールアドレス</FormLabel>
                  <Input ref={initialRef} placeholder="*******@email.com" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>パスワード</FormLabel>
                  <Input placeholder="password" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Link href="/">
            <AccountControlButton
              text="ログアウト"
              colorScheme="whiteAlpha"
              color="purple"
              width="130px"
            />
          </Link>
          <Link href="/myPage">
            <AccountControlButton
              text="マイページ"
              colorScheme="purple"
              color="white"
              width="130px"
            />
          </Link>
          <Link href="newAccount">
          <AccountControlButton
            text="新規登録(無料)"
            colorScheme="purple"
            color="white"
            width="130px"
            />
            </Link>
        </Stack>
      </Flex>
    </Box>
  );
};
