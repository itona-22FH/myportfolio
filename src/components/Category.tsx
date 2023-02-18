import { SearchIcon } from "@chakra-ui/icons";
import { Box, Link, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

export const Category = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="purple.300" />}
      spacing={4}
      align="stretch"
      
    >
      <Box h="40px" mt="20" >
        <span style={{ marginLeft: 10 }}>
          <SearchIcon />
          <span>カテゴリ</span>
        </span>
      </Box>
      <Link>
        <Box h="40px">アクション</Box>
      </Link>
      <Link>
        <Box h="40px">アクション</Box>
      </Link>
      <Link>
        <Box h="40px">アクション</Box>
      </Link>
      <Link>
        <Box h="40px">アクション</Box>
      </Link>
      <Link>
        <Box h="40px">アクション</Box>
      </Link>
    </VStack>
  );
};
