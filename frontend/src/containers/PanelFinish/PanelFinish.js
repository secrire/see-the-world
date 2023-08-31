import React from "react";
import { Stack, Typography, Button } from "@mui/material";

const PanelFinish = ({ cities, clickPlayAgain, score }) => {
  return (
    <>
      <Typography variant="h4" m="32px 0 20px">
        Quiz Completed!
      </Typography>
      <Stack spacing={2} direction="row" alignItems="center" mb="18px">
        <Typography variant="body2" color="green.dark">
          Scores:
        </Typography>
        <Typography variant="h1" color="red.main" letterSpacing={4}>
          {Math.round((score / cities.length) * 100)}
        </Typography>
      </Stack>

      <Typography variant="subtitle2" color="gray.main" mb="70px">
        You have answered correctly for {score} out of {cities.length}{" "}
        questions.
      </Typography>
      <Button
        onClick={clickPlayAgain}
        color="primary"
        variant="contained"
        fullWidth
      >
        Play Again
      </Button>
    </>
  );
};

export default PanelFinish;
