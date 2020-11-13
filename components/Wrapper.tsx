import { Box } from "@chakra-ui/core";
import React from "react";

interface WrapperProps {
  variant: "small" | "regular";
}

const Wrapper: React.FC<WrapperProps> = ({ variant = "regular", children }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "small" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
