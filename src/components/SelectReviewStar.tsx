import React from "react";
import { useRecoilState } from "recoil";
import { reviewStarAtom } from "../lib/recoil/atoms/reviewStarAtom";
import ReactStars from "react-stars";

export const SelectReviewStar = () => {
  const [star, setStar] = useRecoilState(reviewStarAtom);

  const ratingChanged = (star: number) => {
    setStar(star);
  };

  // レビュー投稿用の星を表示
  return (
    <>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        color2={"#ffa500"}
        color1={"#808080"}
        value={star}
      />
    </>
  );
};
