import React from "react";
import { Stack, Typography, Button } from "@mui/material";

const PanelStart = ({ clickStartQuestion }) => {
  return (
    // <Stack
    //   spacing={1}
    //   direction="column"
    //   alignItems="start"
    //   margin="32px 0 30px"
    // >
    <>
      <Typography variant="h1">Let's Play</Typography>
      <Typography variant="body1" lineHeight={2} margin="8px 0 30px !important">
        Do you feel confident? Here you'll challenge one of our most difficult
        city questions!
      </Typography>
      <Button onClick={clickStartQuestion} color="primary" variant="contained">
        Start
      </Button>
    </>

    // </Stack>
  );
};

export default PanelStart;
