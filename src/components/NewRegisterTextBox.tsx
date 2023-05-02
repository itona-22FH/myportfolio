import { Box, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

export const NewRegisterTextBox = ({
  htmlFor,
  placeholder,
  textBoxName,
  onChangeHandle,
  textBoxValue,
}: NewRegisterTextBox) => {
  return (
    <Box pb="10px" pt="10px">
      <FormLabel fontWeight="bold" htmlFor={htmlFor}>
        {htmlFor}
      </FormLabel>
      <Textarea
        id={htmlFor}
        placeholder={placeholder}
        h="300"
        borderColor="purple.300"
        p="3px"
        name={textBoxName}
        onChange={onChangeHandle}
        value={textBoxValue}
      ></Textarea>
    </Box>
  );
};
