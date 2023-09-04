import { useState, useEffect } from "react";
import { Marker as MapboxMarker } from "mapbox-gl";
import { Box, Grid } from "@mui/material";

import Header from "../../containers/Header";
import Panel from "../../containers/Panel";
import Map from "../../containers/Map";

export interface CityType {
  name: string;
  name_native: string;
  country: string;
  continent: string;
  latitude: string;
  longitude: string;
  population: string;
  founded: string;
  landmarks: string[];
}

const MapQuiz = () => {
  const [cities, setCities] = useState<CityType[]>([]);
  const [remainingCities, setRemainingCities] = useState<CityType[]>([]);
  const [marker, setMarker] = useState<MapboxMarker | null>(null);

  const getCitiesData = (): void => {
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
        p: "12px 60px 46px",
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
            p: "26px 34px",
            maxHeight: "-webkit-fill-available",
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
            pl: "40px",
          }}
        >
          <Map setMarker={setMarker} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapQuiz;
