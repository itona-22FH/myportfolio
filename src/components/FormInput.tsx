import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export const FormInput = ({ type, label, placeholder }: FormInputProps) => {
  return (

    <Box pb="5">
      <FormLabel htmlFor={label} fontWeight="bold" color="purple">{label}</FormLabel>
      <Input id={label} type={type} placeholder={placeholder} borderColor="purple.300" p="1"/>
      
    </Box>

  );
};
