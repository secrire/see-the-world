import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import Header from "../../containers/Header";
import Panel from "../../containers/Panel";
import Map from "../../containers/Map";

const MapQuiz = () => {
  const [cities, setCities] = useState([]);
  const [remainingCities, setRemainingCities] = useState([]);
  const [marker, setMarker] = useState(null);

  const getCitiesData = () => {
    fetch("http://localhost:8000/api/cities")
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
        setRemainingCities(data);
      })
      .catch((error) => console.error("Error getCitiesData:", error));
  };

  useEffect(() => {
    getCitiesData();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        padding: "12px 60px 46px",
        background: "#DCECEF",
      }}
    >
      <Header />
      <Grid container sx={{ height: "calc(100vh - 122px)" }}>
        <Grid
          item
          xs={4}
          sx={{
            background: "rgb(254, 254, 254)",
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "26px 34px",
            overflow: "scroll",
          }}
        >
          <Panel
            cities={cities}
            remainingCities={remainingCities}
            setRemainingCities={setRemainingCities}
            marker={marker}
            setMarker={setMarker}
          />
        </Grid>
        <Grid
          item
          xs
          sx={{
            paddingLeft: "40px",
          }}
        >
          <Map setMarker={setMarker} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapQuiz;
