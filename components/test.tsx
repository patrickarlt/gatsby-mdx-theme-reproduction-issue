import React from "react";
import { Box } from "rebass";

export default function Test({ children }) {
  return (
    <Box color="white" bg="primary">
      <code>Inside Test Component</code>
      {children}
    </Box>
  );
}
