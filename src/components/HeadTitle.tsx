import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";

export const HeadTitle = ({ title }: HeadTitleProps) => {
  return (
    <Box>
      <Heading as="h2" size="2xl" pt="20px">
        {title}
      </Heading>
      <Divider borderColor="purple.300" pt="10px" />
    </Box>
  );
};
