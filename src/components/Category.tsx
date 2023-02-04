import { SearchIcon } from "@chakra-ui/icons";
import { Box, Link, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

export const Category = () => {

  return (
    <VStack
      divider={<StackDivider borderColor="cyan.200" />}
      spacing={4}
      align="stretch"
    >
        <Box h="40px" mt="20">
            <SearchIcon/>
            <span style={{marginLeft:10}}>
                カテゴリ
                </span>
        </Box>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
        <Link>
      <Box h="40px">
        アクション
      </Box>
        </Link>
    </VStack>
  );
};
