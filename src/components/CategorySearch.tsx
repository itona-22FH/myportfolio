import { Button } from "@chakra-ui/react";
import React from "react";

export const CategorySearch = ({
  category,
  onClickHandle,
}: CategorySearchProps) => {
  return (
    <>
      <Button h="40px" onClick={onClickHandle} bg="purple.200">
        {category}
      </Button>
    </>
  );
};
