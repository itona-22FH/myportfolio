import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
    <FormControl pb="10px" pt="10px">
      <FormLabel fontWeight="bold">
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        borderColor="purple.300"
        p="4px"
        name={formName}
        onChange={onChangeHandle}
        value={formValue}
      />
    </FormControl>
  );
};
