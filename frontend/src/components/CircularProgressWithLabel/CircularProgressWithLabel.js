import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const CircularProgressWithLabel = ({ value, label }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        margin: "0 auto!important",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        sx={{ color: "#719FA8" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body4">{label}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
