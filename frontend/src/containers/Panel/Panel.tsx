import { useState } from "react";
import { Marker as MapboxMarker } from "mapbox-gl";

import { useSelectedCityContext } from "../../stores/selectedCityStore";

import { CityType } from "../../pages/MapQuiz";
import PanelStart from "../PanelStart";
import PanelCityOptions from "../PanelCityOptions";
import PanelCityInfo from "../PanelCityInfo";
import PanelFinish from "../PanelFinish";

type PanelProps = {
  cities: CityType[];
  remainingCities: CityType[];
  setRemainingCities: React.Dispatch<React.SetStateAction<CityType[]>>;
  marker: MapboxMarker | null;
  setMarker: React.Dispatch<React.SetStateAction<MapboxMarker | null>>;
};

type ActivePanelType = "start" | "cityOptions" | "cityInfo" | "finish";

const Panel = ({
  cities,
  remainingCities,
  setRemainingCities,
  marker,
  setMarker,
}: PanelProps) => {
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [activePanel, setActivePanel] = useState<ActivePanelType>("start");
  const [score, setScore] = useState<number>(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const { selectedCity, setSelectedCity } = useSelectedCityContext();

  const getSelectedCity = () => {
    const filteredCities = remainingCities.filter(
      (city) => city?.name !== selectedCity?.name
    );
    const randomIndexCities = Math.floor(Math.random() * filteredCities.length);
    setRemainingCities(filteredCities);
    setSelectedCity(filteredCities[randomIndexCities]);
  };

  const clickStartQuestion = () => {
    getSelectedCity();
    setQuestionCount(questionCount + 1);
    setActivePanel("cityOptions");
  };

  const clickNextQuestion = () => {
    // remove map marker
    marker?.remove();
    setMarker(null);

    getSelectedCity();
    setQuestionCount(questionCount + 1);
    setActivePanel("cityOptions");
  };

  const clickGetScore = () => {
    // remove map marker
    marker?.remove();
    setMarker(null);

    setActivePanel("finish");
  };

  const clickPlayAgain = () => {
    setQuestionCount(0);
    setScore(0);
    setRemainingCities(cities);
    setSelectedCity(null);
    setActivePanel("start");
  };

  const clickCityOption = (cityName: string | undefined): void => {
    setActivePanel("cityInfo");

    const isCorrect = cityName === selectedCity?.name;
    setIsCorrectAnswer(isCorrect);
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
  };

  const renderPanel = () => {
    switch (activePanel) {
      case "start":
        return <PanelStart clickStartQuestion={clickStartQuestion} />;
      case "cityOptions":
        return (
          <PanelCityOptions
            cities={cities}
            questionCount={questionCount}
            clickCityOption={clickCityOption}
          />
        );
      case "cityInfo":
        return (
          <PanelCityInfo
            cities={cities}
            questionCount={questionCount}
            isCorrectAnswer={isCorrectAnswer}
            clickNextQuestion={clickNextQuestion}
            clickGetScore={clickGetScore}
          />
        );
      case "finish":
        return (
          <PanelFinish
            cities={cities}
            clickPlayAgain={clickPlayAgain}
            score={score}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderPanel()}</>;
};

export default Panel;
