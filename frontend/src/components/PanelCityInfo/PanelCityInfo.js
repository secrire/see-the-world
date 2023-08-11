import React from "react";
import { Stack, Typography, Grid, Box } from "@mui/material";

import { useSelectedCityContext } from "../../stores/selectedCityStore";

const PanelCityInfo = () => {
  const { selectedCity } = useSelectedCityContext();

  const gridBoxData = [
    { label: "Country", value: selectedCity.country },
    { label: "Contient", value: selectedCity.continent },
    { label: "Population", value: selectedCity.population },
    { label: "Founded", value: selectedCity.founded },
  ];

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2.5}>
          {gridBoxData.map((data) => (
            <Grid item xs={6} key={data.label}>
              <Box
                sx={{
                  bgcolor: "#EAEEE2",
                  height: "60px",
                  p: 2,
                  borderRadius: "6px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="body6"
                  sx={{
                    border: "1px solid gray",
                    p: "2px 8px",
                    borderRadius: "10px",
                  }}
                >
                  {data.label}
                </Typography>
                <Typography variant="h2" marginTop="20px">
                  {data.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#D4D1CA",
          p: 2,
          borderRadius: "6px",
          marginTop: "24px !important",
        }}
      >
        <Typography
          variant="body6"
          sx={{ border: "1px solid gray", p: "2px 8px", borderRadius: "10px" }}
        >
          Landmarks
        </Typography>
        <Stack spacing={1} direction="column" sx={{ margin: "14px 0 0" }}>
          {selectedCity.landmarks.map((landmark) => (
            <Typography variant="body2" key={landmark}>
              {`-  ${landmark}`}
            </Typography>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default PanelCityInfo;
