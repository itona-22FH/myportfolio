import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { useRecoilState } from "recoil";
import { reviewStarAtom } from "../lib/recoil/atoms/reviewStarAtom";

export const StarRating = () => {
  const [star, setStar] = useRecoilState(reviewStarAtom);

  const onChange = (star: number) => {
    setStar(star);
  };

  return (
    <>
      <ReactStarsRating onChange={onChange} value={star} isHalf={false}/>
    </>
  );
};