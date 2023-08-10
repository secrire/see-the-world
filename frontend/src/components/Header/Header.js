import React from "react";
import { AppBar, Typography } from '@mui/material';


const Header = (props) => {
  return (
    <AppBar position="static" sx={{
      // background:
        // "linear-gradient(to bottom, rgb(65, 133, 242), rgb(85, 115, 237))",
        background: 'transparent', boxShadow: 'none', height:'64px'
    }}>
        <Typography variant="h2" sx={{ lineHeight:'64px'}}>SEE THE WORLD</Typography>
    </AppBar>
  );
};

export default Header;
