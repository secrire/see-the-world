import React from "react";
import { Stack, Box, Typography, CircularProgress } from "@mui/material";

import "../../index.css";
import { useQuestionCountContext } from "../../stores/questionCountStore";

const PanelHeader = ({ citiesLength }) => {
  const { questionCount } = useQuestionCountContext();

  const circularProgressWithLabel = () => {
    const progressValue = (questionCount / citiesLength) * 100;
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
          value={progressValue}
          sx={{color:"#719FA8"}}
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
          <Typography variant="body4">{questionCount} </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Stack spacing={2} direction="row" alignItems="center" position="relative">
      {questionCount !== 0 ? circularProgressWithLabel() : null}
    </Stack>
  );
};

export default PanelHeader;
