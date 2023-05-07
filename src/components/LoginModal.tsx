import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  Flex,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { auth } from "../lib/firebase/firebaseConfig";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { FormPassword } from "./FormPassword";

export const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const setLoginUserId = useSetRecoilState(testLoginUserAtom);

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginUserId(userCredential.user.uid);
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  const inputPassword = (e: { target: { value: string } }) => {
    //確認用パスワードの入力
    setPassword(e.target.value);
  };

  const inputEmail = (e: { target: { value: string } }) => {
    //確認用パスワードの入力
    setEmail(e.target.value);
  };


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
              <FormLabel fontWeight="bold">メールアドレス</FormLabel>
              <Input
                type="email"
                placeholder="*******@email.com"
                name="email"
                onChange={inputEmail}
                borderColor="purple.300"
              />
            </FormControl>

            <FormPassword formValue={password} onChangeHandle={inputPassword} formLabel={"パスワード"}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr="10px" onClick={handleLogin}>
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
