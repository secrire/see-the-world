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
        <Grid container spacing={2.6}>
          {gridBoxData.map((data) => (
            <Grid item xs={6} key={data.label}>
              <Box
                sx={{
                  bgcolor: "#EAEEE2",
                  height: "62px",
                  p: 2,
                  borderRadius: "6px",
                }}
              >
                <Typography
                  variant="body5"
                  sx={{
                    border: "1px solid gray",
                    p: "2px 8px",
                    borderRadius: "10px",
                  }}
                >
                  {data.label}
                </Typography>
                <Typography variant="h2" sx={{ marginTop: "20px" }}>
                  {data.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ bgcolor: "#D4D1CA", p: 2, borderRadius: "6px" }}
      >
        <Typography
          variant="body5"
          sx={{ border: "1px solid gray", p: "2px 8px", borderRadius: "10px" }}
        >
          Landmarks
        </Typography>
         <Stack spacing={1} direction="column"  sx={{ margin: "14px 0 0"}}>
          {selectedCity.landmarks.map((landmark) => (
            <Typography
              variant="body2"
              key={landmark}
            >
              {`-  ${landmark}`}
            </Typography>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default PanelCityInfo;
