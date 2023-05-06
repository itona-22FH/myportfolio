import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        color="purple"
        colorScheme="whiteAlpha"
        w="130px"
      >
        ログイン
      </Button>

      {/* ログインボタンが押された時に表示するモーダル */}
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>アカウント情報を入力してください</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6px">
            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input
                type="email"
                placeholder="*******@email.com"
                name="email"
              />
            </FormControl>

            <FormControl mt="4px">
              <FormLabel>パスワード</FormLabel>
              <Input type="password" placeholder="password" name="password" />
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
  );
};
