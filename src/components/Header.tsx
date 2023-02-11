import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import React from "react";

import { AccountControlButton } from "./AccountControlButton";

export const Header = () => {
  return (
    <Box w="100%" h="80px" bg="purple.300">
      <Flex
        verticalAlign="center"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Button colorScheme="black" variant="outline" ml="10">
            トップへ戻る
          </Button>
        </Link>
        <Stack direction="row" spacing={4} mr="10">
          <AccountControlButton
            text="ログイン"
            colorScheme="whiteAlpha"
            color="purple"
          />
          <AccountControlButton
            text="ログアウト"
            colorScheme="whiteAlpha"
            color="purple"
          />
          <AccountControlButton
            text="マイページ"
            colorScheme="purple"
            color="white"
          />
          <AccountControlButton
            text="新規登録(無料)"
            colorScheme="purple"
            color="white"
          />
        </Stack>
      </Flex>
    </Box>
  );
};
