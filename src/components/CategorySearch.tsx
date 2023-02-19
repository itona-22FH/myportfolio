import { Box, Link } from "@chakra-ui/react";
import React from "react";

export const CategorySearch = ({ category }: CategorySearchProps) => {
  return (
    <>
      <Link>
        <Box h="40px">{category}</Box>
      </Link>
    </>
  );
};
