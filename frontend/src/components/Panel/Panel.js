import React, { useState } from "react";

import { useQuestionCountContext } from "../../stores/questionCountStore";
import { useSelectedCityContext } from "../../stores/selectedCityStore";

import PanelHeader from "../PanelHeader";
import PanelTitle from "../PanelTitle";
import PanelContent from "../PanelContent";

const Panel = ({
  cities,
  clickNextQuestion,
  showCityInfo,
  setShowCityInfo,
  clickPlayAgain,
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const { questionCount } = useQuestionCountContext();
  const { selectedCity } = useSelectedCityContext();

  const checkAnswer = (cityName) => {
    if (questionCount < cities.length) {
      setShowCityInfo(true);
    }

    const isCorrect = cityName === selectedCity.name;
    setIsCorrectAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <>
      <PanelHeader citiesLength={cities.length} />
      <PanelTitle
        citiesLength={cities.length}
        showCityInfo={showCityInfo}
        isCorrectAnswer={isCorrectAnswer}
      />
      <PanelContent
        cities={cities}
        clickNextQuestion={clickNextQuestion}
        checkAnswer={checkAnswer}
        showCityInfo={showCityInfo}
        clickPlayAgain={clickPlayAgain}
        score={score}
      />
    </>
  );
};

export default Panel;
