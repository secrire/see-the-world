import React from "react";
import { Stack, Typography, Button } from "@mui/material";

const PanelFinish = ({ cities, clickPlayAgain, score }) => {
  return (
    // <Stack
    //   spacing={1}
    //   direction="column"
    //   alignItems="start"
    //   margin="32px 0 30px"
    // >
    <>
      <Typography variant="h1">Quiz Completed!</Typography>
      <Stack spacing={2} direction="row" alignItems="center">
        <Typography variant="body5">Scores:</Typography>
        <Typography
          variant="h1"
          sx={{ color: "#F14E25", fontSize: "5rem" }}
          letterSpacing={4}
        >
          {Math.round((score / cities.length) * 100)}
        </Typography>
      </Stack>

      <Typography variant="body1">
        You have answered correctly for {score} out of {cities.length}{" "}
        questions.
      </Typography>
      <Button
        onClick={() => clickPlayAgain()}
        color="primary"
        variant="contained"
      >
        Play Again
      </Button>
    </>

    // </Stack>
  );
};

export default PanelFinish;
