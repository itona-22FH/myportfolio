import React from "react";
import { Text, Image, Link, Box, Avatar, Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { showPlanAtom } from "../lib/recoil/atoms/showPlanAtom";
import { useRouter } from "next/router";
import { ReviewStatus } from "./ReviewStatus";

export const GamePlan = () => {
  const showPlan = useRecoilValue(showPlanAtom);

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {/* showGamePlanAtomにセットされた配列を表示 */}
      {showPlan.map(
        ({
          planID,
          planTitle,
          planImage,
          userName,
          price,
          userAvatar,
          review,
        }) => (
          <Link
            key={planID}
            href={`/plan/${planID}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              borderColor="purple.300"
              overflow="hidden"
              ml="10px"
              mt="10px"
              mb="10px"
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
                {pathname === "/" && (
                  <>
                    <Flex alignItems="center" mt="4" mb="4">
                      <Avatar name={userName} src={userAvatar} />
                      <Text ml="3" lineHeight="1" verticalAlign="center">
                        {userName}
                      </Text>
                    </Flex>
                    <ReviewStatus
                      review={review}
                    />
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
