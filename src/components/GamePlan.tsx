import React from "react";
import { Text, Image, Link, Box, Avatar, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReviewStatus } from "./ReviewStatus";
import { Badge } from "@chakra-ui/react";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { useRecoilValue } from "recoil";
import { planCollectionAtom } from "../lib/recoil/atoms/planCollectionAtom";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";

export const GamePlan = ({ showPlan }: GamePlanProps) => {
  //URLからpathnameを取得
  const router = useRouter();
  const { pathname } = router;

  const loginUser = useRecoilValue(testLoginUserAtom)

  //FIREBASEからすべてのプラン情報を取得
  const planCollections = useRecoilValue(planCollectionAtom);

  //プロフィールデータを取得
  const profileCollections = useRecoilValue(profileCollectionAtom);

  const showAllPlan = planCollections.flatMap((plan) =>
    profileCollections
      .map((profile) =>
        plan.userId === profile.userId
          ? {
              planId: plan.planId,
              planTitle: plan.planTitle,
              planImage: plan.planImage,
              userName: profile.userName,
              price: plan.price,
              userAvatar: profile.userAvatar,
              review: profile.review,
              genreCategory: plan.genreCategory,
              titleCategory: plan.titleCategory,
            }
          : undefined
      )
      .filter((obj): obj is ShowPlan => typeof obj !== "undefined")
  );

  return (
    <>
      {/* showGamePlanAtomにセットされた配列を表示 */}
      {(!showPlan?.length && pathname === "/" ? showAllPlan : showPlan )?.map(
        ({
          planId,
          planTitle,
          planImage,
          userName,
          price,
          userAvatar,
          review,
          titleCategory,
          genreCategory,
        }) => (
          <Link
            key={planId as string}
            href={loginUser === "" ? "/newAccount" :`/plan/${planId}`}
            style={{ textDecoration: "none" }}
            ml="10px"
            mt="10px"
            mb="10px"
          >
          <Box
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              borderColor="purple.300"
              overflow="hidden"
            >
              <Image src={planImage} alt="PlanImage" />

              <Box p="3">
                <Box
                  mt="1"
                  fontWeight="bold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {planTitle}
                </Box>
                <Badge bg="purple.200" mr="5px">
                  {genreCategory}
                </Badge>
                <Badge bg="purple.200">{titleCategory}</Badge>
                {pathname === "/" && ( //トップページ表示中？
                  <>
                    <Flex alignItems="center" mt="4" mb="4">
                      <Avatar name={userName} src={userAvatar} />
                      <Text ml="3" lineHeight="1" verticalAlign="center">
                        {userName}
                      </Text>
                    </Flex>
                    <ReviewStatus review={review} />
                  </>
                )}

                <Box mt="3" color="red">
                  {Number(price).toLocaleString()}
                  <Box as="span" color="black" fontSize="sm">
                    円
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        )
      )}
    </>
  );
};
