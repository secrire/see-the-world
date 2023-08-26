import React from "react";
import { Typography, Stack } from "@mui/material";

import Earth from "../../images/earth_black_24dp.svg";

const Header = () => {
  return (
    <Stack direction="row" alignItems="center" height="64px">
      <Typography variant="h2" sx={{ lineHeight: "64px", color: "#29114F" }}>
        See the w
      </Typography>
      <Earth className="icon-secondary" />
      <Typography variant="h2" sx={{ lineHeight: "64px", color: "#29114F" }}>
        rld
      </Typography>
    </Stack>
  );
};

export default Header;
