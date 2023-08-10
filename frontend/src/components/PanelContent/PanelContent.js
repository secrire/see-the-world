import React from "react";
import { Stack, Button, Typography } from "@mui/material";

import { useQuestionCountContext } from "../../stores/questionCountStore";
import { useSelectedCityContext } from "../../stores/selectedCityStore";
import allCities from "../../assets/allCities.json";

import PanelCityInfo from "../PanelCityInfo";

const PanelContent = ({
  cities,
  clickNextQuestion,
  checkAnswer,
  showCityInfo,
  clickPlayAgain,
  score,
}) => {
  const { questionCount } = useQuestionCountContext();
  const { selectedCity } = useSelectedCityContext();

  const getRandomIndices = (array, count) => {
    const randomIndices = [];
    const availableIndices = array.length;

    while (randomIndices.length < count) {
      const randomIndex = Math.floor(Math.random() * availableIndices);

      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    return randomIndices;
  };

  const renderCityOptions = () => {
    // filter the same city name as cities.json from allCities.json
    const wrongCities = allCities.filter(
      (allCity) => !cities.some((city) => city.name === allCity.name)
    );

    // const randomIndexCities = Math.floor(Math.random() * cities.length);
    const randomIndexWrongCities = getRandomIndices(wrongCities, 2);

    const randomWrongCities = randomIndexWrongCities.map(
      (index) => wrongCities[index].name
    );

    // Create an array with the selected cities' names
    const tempCityOptions = [selectedCity.name, ...randomWrongCities];

    // Shuffle the selected cities array
    const cityOptions = [...tempCityOptions].sort(() => Math.random() - 0.5);

    return cityOptions.map((cityName) => (
      <Button
        onClick={() => checkAnswer(cityName)}
        key={cityName}
        color="primary"
        variant="contained"
      >
        {cityName}
      </Button>
    ));
  };

  const renderContent = () => {
    if (showCityInfo) {
      return (
        <>
          <PanelCityInfo />
          <Button
            onClick={() => clickNextQuestion()}
            color="primary"
            variant="contained"
          >
            Go Next
          </Button>
        </>
      );
    } else {
      switch (questionCount) {
        case 0:
          return (
            <Button
              onClick={() => clickNextQuestion()}
              color="primary"
              variant="contained"
            >
              Start
            </Button>
          );
        case cities.length:
          return (
            <>
              <Typography variant="h4">
                Scores: {(score / cities.length) * 100}
              </Typography>
              <Typography variant="body1">
                You have answered correctly for {score} out of {cities.length}{" "}
                questions.
              </Typography>
              <Button
                onClick={() => clickPlayAgain()}
                color="primary"
                variant="contained"
              >
                Play Again
              </Button>
            </>
          );
        default:
          return renderCityOptions();
      }
    }
  };

  return (
    <Stack spacing={3} direction="column">
      {renderContent()}
    </Stack>
  );
};

export default PanelContent;
