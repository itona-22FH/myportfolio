/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import React from "react";
import ReactStars from "react-stars";

export const ReviewStatus = ({ review }: ReviewStatusProps) => {
  // レビュー数のカウント
  const reviewCount = Object.keys(review).length;

  // rすべて合計した値を代入
  const totalReviewScore = Object.values<number>(review);

  const sumReviewScore = totalReviewScore.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  // //レビュースコアの平均値を算出
  const averageReviewScore =
    Math.floor((sumReviewScore / reviewCount) * 10) / 10;

  return (
    <Box display="flex" mt="2px" mb="2px" alignItems="center">
      {averageReviewScore ? averageReviewScore : 0}
      <ReactStars
        count={5}
        size={24}
        color2={"#ffa500"}
        color1={"#696969"}
        edit={false}
        value={averageReviewScore}
      />
      <Box as="span" ml="2" color="gray" fontSize="sm">
        {reviewCount} reviews
      </Box>
    </Box>
  );
};
