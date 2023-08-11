import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import { useQuestionCountContext } from "../../stores/questionCountStore";
import { useSelectedCityContext } from "../../stores/selectedCityStore";
import Header from "../../components/Header";
import Panel from "../../components/Panel";
import Map from "../../components/Map";

const MapQuiz = () => {
  const [cities, setCities] = useState([]);
  const [remainingCities, setRemainingCities] = useState([]);
  const [showCityInfo, setShowCityInfo] = useState(false);
  const [score, setScore] = useState(0);
  const [marker, setMarker] = useState(null);

  const { questionCount, setQuestionCount } = useQuestionCountContext();
  const { selectedCity, setSelectedCity } = useSelectedCityContext();

  const clickNextQuestion = () => {
    // remove map marker if there was one
    if (questionCount > 0) {
      marker.remove();
      setMarker(null);
    }

    const filteredCities = remainingCities.filter(
      (city) => city?.name !== selectedCity?.name
    );
    const randomIndexCities = Math.floor(Math.random() * filteredCities.length);
    setRemainingCities(filteredCities);
    setSelectedCity(filteredCities[randomIndexCities]);
    setQuestionCount(questionCount + 1);
    setShowCityInfo(false);
  };

  const clickPlayAgain = () => {
    setQuestionCount(0);
    setScore(0);

    setRemainingCities(cities);
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
            clickNextQuestion={clickNextQuestion}
            showCityInfo={showCityInfo}
            setShowCityInfo={setShowCityInfo}
            clickPlayAgain={clickPlayAgain}
            score={score}
            setScore={setScore}
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
