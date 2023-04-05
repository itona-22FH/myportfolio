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

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loginStatus = useRecoilValue(testLoginUserAtom);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const router = useRouter();
  const { id } = router.query;

  return (
    <Box w="100%" h="80px" bg="purple.300">
      <Flex
        verticalAlign="center"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        {id ? (
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
                size="3xl"
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
                        name="email"
                      />
                    </FormControl>

                    <FormControl mt="4px">
                      <FormLabel>パスワード</FormLabel>
                      <Input
                        type="password"
                        placeholder="password"
                        name="password"
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr="10px">
                      ログイン
                    </Button>
                    <Button onClick={onClose} colorScheme="red">
                      キャンセル
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
