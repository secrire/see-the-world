import { Stack, Typography, Button } from "@mui/material";

import { useSelectedCityContext } from "../../stores/selectedCityStore";

import { CityType } from "../../pages/MapQuiz";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import allCities from "../../data/allCities.json";

type PanelCityOptionsProps = {
  cities: CityType[];
  questionCount: number;
  clickCityOption: (cityName: string | undefined) => void;
};

const PanelCityOptions = ({
  cities,
  questionCount,
  clickCityOption,
}: PanelCityOptionsProps) => {
  const { selectedCity } = useSelectedCityContext();

  const progressValue = (questionCount / cities.length) * 100;

  const getRandomIndices = (array: any[], count: number): number[] => {
    const randomIndices: number[] = [];
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
            fullWidth
          >
            {cityOption}
          </Button>
        ))}
      </Stack>
    );
  };

  return (
    <>
      <Stack>
        <CircularProgressWithLabel
          value={progressValue}
          label={questionCount}
          color="primary"
        />
      </Stack>
      <Typography variant="subtitle2" color="secondary" m="26px 0 16px">
        question {questionCount} of {cities.length}
      </Typography>
      <Typography variant="h4" mb="40px">
        Guess which city it is?
      </Typography>
      {renderCityOptions()}
    </>
  );
};

export default PanelCityOptions;
