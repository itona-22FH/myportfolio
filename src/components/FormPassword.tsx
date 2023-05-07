import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const FormPassword = ({
    formValue,
    onChangeHandle,
    formLabel,
}: FormPasswordProps) => {
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  const togglePassword = () => {
    setIsRevealPassword((prev) => !prev);
  };

  return (
    <FormControl mt="4px">
      <Flex>
        <FormLabel fontWeight="bold">{formLabel}</FormLabel>
        <span onClick={togglePassword}>
          {isRevealPassword ? <ViewIcon /> : <ViewOffIcon />}
        </span>
      </Flex>
      <Input
        type={isRevealPassword ? "text" : "password"}
        placeholder={formLabel}
        p="4px"
        name="password"
        onChange={onChangeHandle}
        value={formValue}
        borderColor="purple.300"
      />
    </FormControl>
  );
};
