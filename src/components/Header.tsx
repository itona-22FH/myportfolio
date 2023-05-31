/* eslint-disable react/jsx-no-undef */
import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { AccountControlButton } from "./AccountControlButton";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { ConfirmationBtn } from "./ConfirmationBtn";
import { LoginModal } from "./LoginModal";
import { auth } from "../lib/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export const Header = () => {
  const [loginUserId, setLoginUserId] = useRecoilState(testLoginUserAtom);

  const router = useRouter();
  const { id } = router.query;
  const { pathname } = router;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoginUserId("");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  //ログイン状態の監視
  const observerLoginUser = (user: any) => {
    user ? setLoginUserId(user.uid) : setLoginUserId("");
  };
  onAuthStateChanged(auth, observerLoginUser);

  return (
    <Box w="100%" h="80px" bg="purple.300">
      <Flex
        verticalAlign="center"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* トップページ以外のときのみ表示 */}
        {id || pathname !== "/" ? (
          <Link href="/" style={{ textDecoration: "none" }} ml="10px">
            <Button
              colorScheme="linkedin"
              variant="outline"
              color="purple"
              w="130px"
            >
              トップへ戻る
            </Button>
          </Link>
        ) : (
          <Box />
        )}
        <Stack direction="row" spacing={4} mr="10px">
          {/* ログアウト状態の時表示 */}
          {loginUserId === "" && (
            <>
              <LoginModal />
              <AccountControlButton
                text="新規登録(無料)"
                colorScheme="purple"
                color="white"
                width="130px"
                href="/newAccount"
              />
            </>
          )}

          {/* ログイン状態の時表示 */}
          {loginUserId !== "" && (
            <>
              <ConfirmationBtn
                text="ログアウト"
                colorScheme="whiteAlpha"
                color="purple"
                width="130px"
                confirmation="ログアウト"
                handleConfirmation={handleLogout}
              />
              {pathname !== "/myPage/[id]" && (
                <AccountControlButton
                  text="マイページ"
                  colorScheme="purple"
                  color="white"
                  width="130px"
                  href={`/myPage/${loginUserId}`}
                />
              )}
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
