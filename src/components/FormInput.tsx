import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export const FormInput = ({
  type,
  label,
  placeholder,
  formName,
  onChangeHandle,
  formValue,
}: FormInputProps) => {
  return (
    <Box pb="10px" pt="10px">
      <FormLabel htmlFor={label} fontWeight="bold">
        {label}
      </FormLabel>
      <Input
        id={label}
        type={type}
        placeholder={placeholder}
        borderColor="purple.300"
        p="4px"
        name={formName}
        onChange={onChangeHandle}
        value={formValue}
      />
    </Box>
  );
};
