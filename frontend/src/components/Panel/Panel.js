import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import { useQuestionCountContext } from "../../stores/questionCountStore";
import { useSelectedCityContext } from "../../stores/selectedCityStore";

import CircularProgressWithLabel from "../CircularProgressWithLabel";
import PanelTitle from "../PanelTitle";
import PanelContent from "../PanelContent";

const Panel = ({
  cities,
  clickNextQuestion,
  showCityInfo,
  setShowCityInfo,
  clickPlayAgain,
  score,
  setScore,
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [progressValue, setProgressValue] = useState(null);
  const { questionCount } = useQuestionCountContext();
  const { selectedCity } = useSelectedCityContext();

  const clickCityOption = (cityName) => {
    if (questionCount <= cities.length) {
      setShowCityInfo(true);
    }

    const isCorrect = cityName === selectedCity.name;
    setIsCorrectAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    const tempValue = (questionCount / cities.length) * 100;
    setProgressValue(tempValue);
  }, [questionCount]);

  return (
    <>
      <Stack spacing={2} direction="row" alignItems="center">
        {questionCount > 0 && questionCount <= cities.length ? (
          <CircularProgressWithLabel value={progressValue} />
        ) : null}
      </Stack>

      <PanelTitle
        citiesLength={cities.length}
        showCityInfo={showCityInfo}
        isCorrectAnswer={isCorrectAnswer}
      />
      <PanelContent
        cities={cities}
        clickNextQuestion={clickNextQuestion}
        clickCityOption={clickCityOption}
        showCityInfo={showCityInfo}
        clickPlayAgain={clickPlayAgain}
        score={score}
      />
    </>
  );
};

export default Panel;
