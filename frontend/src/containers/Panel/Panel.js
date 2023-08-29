import React, { useState } from "react";

import { useSelectedCityContext } from "../../stores/selectedCityStore";

import PanelStart from "../PanelStart";
import PanelCityOptions from "../PanelCityOptions";
import PanelCityInfo from "../PanelCityInfo";
import PanelFinish from "../PanelFinish";

const Panel = ({
  cities,
  remainingCities,
  setRemainingCities,
  marker,
  setMarker,
}) => {
  const [questionCount, setQuestionCount] = useState(0);
  const [activePanel, setActivePanel] = useState("start");
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
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
    marker.remove();
    setMarker(null);

    getSelectedCity();
    setQuestionCount(questionCount + 1);
    setActivePanel("cityOptions");
  };

  const clickGetScore = () => {
    // remove map marker
    marker.remove();
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

  const clickCityOption = (cityName) => {
    setActivePanel("cityInfo");

    const isCorrect = cityName === selectedCity.name;
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
