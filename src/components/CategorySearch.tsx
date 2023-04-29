import { Box, Button, Text, Link } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { planCollectionAtom } from "../lib/recoil/atoms/planCollectionAtom";
import { showPlanAtom } from "../lib/recoil/atoms/showPlanAtom";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";

export const CategorySearch = ({ category }: CategorySearchProps) => {
  const [planCollections, setPlanCollections] =
    useRecoilState(planCollectionAtom);
  const [profileCollections, setProfileCollections] = useRecoilState(
    profileCollectionAtom
  );
  const setShowPlan = useSetRecoilState(showPlanAtom);

  const sortPlanHandle = (e: any) => {
    const newPlan: ShowPlan[] = [];

    const sortPlan = planCollections.filter((plan) => {
      if (
        plan.genreCategory === e.target.innerText ||
        plan.titleCategory === e.target.innerText
      ) {
        return plan;
      } else if (e.target.innerText === "全てのプラン") {
        return planCollections;
      }
    });
    sortPlan.map((plan) => {
      profileCollections.map((profile) => {
        if (plan.userID === profile.userID) {
          const planData = {
            planID: plan.planID,
            planTitle: plan.planTitle,
            planImage: plan.planImage,
            userName: profile.userName,
            price: plan.price,
            userAvatar: profile.userAvatar,
            review: profile.review,
            genreCategory: plan.genreCategory,
            titleCategory: plan.titleCategory,
          };
          newPlan.push(planData);
        }
      });
    });
    setShowPlan(newPlan);
  };
  return (
    <>
      <Button h="40px" onClick={sortPlanHandle} bg="purple.200">
        {category}
      </Button>
    </>
  );
};
