/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";

export const ReviewStatus = ({ review }: ReviewStatusProps) => {
  //レビュー数のカウント
  const reviewCount = review?.length;
  //レビュースコア用配列
  const reviewScoreArray: number[] = [];


  //レビュースコアをreviewScoreArrayへ格納
  review?.forEach((reviewScore: number) => {
    reviewScoreArray.push(...Object.values(reviewScore));
  });

  //reviewScoreArrayをすべて合計した値を代入
  const totalReviewScore = reviewScoreArray.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  //レビュースコアの平均値を算出
  const averageReviewScore =
    Math.floor((totalReviewScore / reviewCount) * 10) / 10;

  return (
    <Box display="flex" mt="2px" mb="2px" alignItems="center">
      {averageReviewScore ? averageReviewScore : 0}
      <ReactStarsRating value={totalReviewScore / reviewCount} isEdit={false} />
      <Box as="span" ml="2" color="gray" fontSize="sm">
        {reviewCount} reviews
      </Box>
    </Box>
  );
};
