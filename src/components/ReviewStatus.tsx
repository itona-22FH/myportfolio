import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

export const ReviewStatus = ({
  reviewScore,
  reviewCount,
}: ReviewStatusProps) => {
  return (
    <Box display="flex" mt="2px" mb="2px" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon
            key={i}
            color={i < reviewScore / reviewCount ? "orange" : "gray.200"}
          />
        ))}
      <Box as="span" ml="2" color="gray" fontSize="sm">
        {reviewCount} reviews
      </Box>
    </Box>
  );
};
