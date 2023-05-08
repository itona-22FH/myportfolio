import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { auth } from "../lib/firebase/firebaseConfig";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { FormInput } from "./FormInput";
import { FormPassword } from "./FormPassword";

export const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const setLoginUserId = useSetRecoilState(testLoginUserAtom);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      setLoginUserId(userCredential.user.uid);
    } catch (error) {
      console.error(error);
    }
  };

  const inputLoginData = (e: {
    target: { name: string; value: string | number };
  }) => {
    //確認用パスワードの入力
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
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
            <FormInput
              label="メールアドレス"
              type="email"
              placeholder="********@email.com"
              formName="email"
              onChangeHandle={inputLoginData}
              formValue={loginData.email}
            />

            <FormPassword
              onChangeHandle={inputLoginData}
              formValue={loginData.password}
              formLabel="パスワード"
              formName="password"
            />
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
