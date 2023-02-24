import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const TextBox = ({ title, text, fontSize }: TextBox) => {
  return (
    <Box mt="20px">
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text mt="10px" fontSize={fontSize}>
        {text}
      </Text>
    </Box>
  );
};
