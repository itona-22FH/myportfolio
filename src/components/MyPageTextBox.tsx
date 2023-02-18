import { Box, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

export const MyPageTextBox = ({htmlFor, placeholder}: myPageTextBoxProps) => {
  return (
    <Box pb="5">
      <FormLabel fontWeight="bold"  htmlFor={htmlFor}>{htmlFor}</FormLabel>
      <Textarea
        id={htmlFor}
        placeholder={placeholder}
        h="300"
        borderColor="purple.300"
      ></Textarea>
    </Box>
  );
};
