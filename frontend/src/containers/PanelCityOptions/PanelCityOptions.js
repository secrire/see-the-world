import React from "react";
import { Stack, Typography, Button } from "@mui/material";

import { useSelectedCityContext } from "../../stores/selectedCityStore";

import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import allCities from "../../data/allCities.json";

const PanelCityOptions = ({ cities, questionCount, clickCityOption }) => {
  const { selectedCity } = useSelectedCityContext();

  const progressValue = (questionCount / cities.length) * 100;

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

    const randomIndexWrongCities = getRandomIndices(wrongCities, 2);

    const randomWrongCities = randomIndexWrongCities.map(
      (index) => wrongCities[index].name
    );

    // Create an array with the selected cities' names
    const tempCityOptions = [selectedCity?.name, ...randomWrongCities];

    // Shuffle the selected cities array
    const cityOptions = [...tempCityOptions].sort(() => Math.random() - 0.5);

    return (
      <Stack spacing={4} direction="column">
        {cityOptions.map((cityOption) => (
          <Button
            onClick={() => clickCityOption(cityOption)}
            key={cityOption}
            color="primary"
            variant="contained"
          >
            {cityOption}
          </Button>
        ))}
      </Stack>
    );
  };

  return (
    <Stack
      spacing={1}
      direction="column"
      alignItems="start"
      margin="32px 0 30px"
    >
      <CircularProgressWithLabel value={progressValue} label={questionCount} />
      <Typography variant="body3" margin="0 0 8px !important">
        question {questionCount} of {cities.length}
      </Typography>
      <Typography variant="h1" margin="0 0 20px !important">
        Guess which city it is?
      </Typography>
      {renderCityOptions()}
    </Stack>
  );
};

export default PanelCityOptions;
