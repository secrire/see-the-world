import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import { useQuestionCountContext } from "../../stores/questionCountStore";
import { useSelectedCityContext } from "../../stores/selectedCityStore";
import Header from "../../components/Header";
import Panel from "../../components/Panel";
import Map from "../../components/Map";

const MapQuiz = (props) => {
  const [cities, setCities] = useState([]);
  const [remainingCities, setRemainingCities] = useState([]);
  const [showCityInfo, setShowCityInfo] = useState(false);

  const { questionCount, setQuestionCount } = useQuestionCountContext();
  const { selectedCity, setSelectedCity } = useSelectedCityContext();

  const clickNextQuestion = () => {
    const filteredCities = remainingCities.filter(
      (city) => city !== selectedCity
    );
    const randomIndexCities = Math.floor(Math.random() * filteredCities.length);

    setSelectedCity(filteredCities[randomIndexCities]);
    setQuestionCount(questionCount + 1);
    setRemainingCities(filteredCities);
    setShowCityInfo(false);
  };

  const clickPlayAgain = () => {
    setRemainingCities(cities);
    setQuestionCount(0);
  };

  const init = () => {
    fetch("http://localhost:8000/api/cities")
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
        setRemainingCities(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        padding: "22px 40px",
        background: "#DCECEF",
      }}
    >
      <Header />
      <Grid container sx={{ height: "calc(100vh - 108px)" }}>
        <Grid
          item
          xs={4}
          sx={{
            background: "rgb(254, 254, 254)",
            borderRadius: "10px",
            padding: "26px 34px"
          }}
        >
          <Panel
            cities={cities}
            clickNextQuestion={clickNextQuestion}
            showCityInfo={showCityInfo}
            setShowCityInfo={setShowCityInfo}
            clickPlayAgain={clickPlayAgain}
          />
        </Grid>
        <Grid item xs>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapQuiz;
