/* eslint-disable react-hooks/exhaustive-deps */
import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const ReviewStatus = ({ review }: ReviewStatusProps) => {
  const reviewCount = review?.length;
  const reviewScoreArray: number[] = [];

  review?.forEach((reviewScore: number) => {
    reviewScoreArray.push(...Object.values(reviewScore));
  });
  const totalReviewScore = reviewScoreArray.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  return (
    <Box display="flex" mt="2px" mb="2px" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon
            key={i}
            color={i < totalReviewScore / reviewCount ? "orange" : "gray.200"}
          />
        ))}
      <Box as="span" ml="2" color="gray" fontSize="sm">
        {reviewCount} reviews
      </Box>
    </Box>
  );
};
