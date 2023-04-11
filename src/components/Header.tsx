/* eslint-disable react/jsx-no-undef */
import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";

import { AccountControlButton } from "./AccountControlButton";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { ConfirmationBtn } from "./ConfirmationBtn";
import { LoginModal } from "./LoginModal";

export const Header = () => {
  const testUserId = useRecoilValue(testLoginUserAtom);

  const router = useRouter();
  const { id } = router.query;
  const { pathname } = router;
  console.log(pathname)

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
          <Box />
        )}

        <Stack direction="row" spacing={4} mr="10px">
          {/* ログアウト状態の時表示 */}
          {testUserId === "" && (
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
          {testUserId !== "" && (
            <>
              <ConfirmationBtn
                text="ログアウト"
                colorScheme="whiteAlpha"
                color="purple"
                width="130px"
                confirmation="ログアウト"
              />
              {pathname !== "/myPage/[id]" && (
                <AccountControlButton
                  text="マイページ"
                  colorScheme="purple"
                  color="white"
                  width="130px"
                  href={`/myPage/${testUserId}`}
                />
              )}
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
