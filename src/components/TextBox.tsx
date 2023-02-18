import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const TextBox = ({ title }: TextBox) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mt="2" mb="2">
        {title}
      </Heading>
      <Text mt="1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Box>
  );
};
