import { Typography, Stack } from "@mui/material";

import Earth from "../../images/earth_black_24dp.svg";

const logoFontStyle = {
  fontSize: 20,
  fontWeight: "bold",
  lineHeight: "64px",
  color: "#29114F",
};

const Header = () => {
  return (
    <Stack direction="row" alignItems="center" height="64px">
      <Typography sx={logoFontStyle}>See the w</Typography>
      <Earth className="icon-secondary" />
      <Typography sx={logoFontStyle}>rld</Typography>
    </Stack>
  );
};

export default Header;
