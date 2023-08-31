import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const CircularProgressWithLabel = ({ value, label, color }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        m: "0 auto",
      }}
    >
      <CircularProgress variant="determinate" value={value} color={color} />
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
        <Typography variant="body1" color={color} fontWeight={700}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
