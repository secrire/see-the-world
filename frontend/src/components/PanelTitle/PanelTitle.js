import React from "react";
import { Stack, Typography } from "@mui/material";

import { useQuestionCountContext } from "../../stores/questionCountStore";
import { useSelectedCityContext } from "../../stores/selectedCityStore";
import { ReactComponent as Smile } from "../../images/smile_black_24dp.svg";
import { ReactComponent as Sad } from "../../images/sad_black_24dp.svg";

const PanelTitle = ({ citiesLength, showCityInfo, isCorrectAnswer }) => {
  const { questionCount } = useQuestionCountContext();
  const { selectedCity } = useSelectedCityContext();

  const renderTitle = () => {
    if (showCityInfo) {
      const iconStyle = {
        width: 42,
        height: 42,
      };

      const renderNameNative = () => {
        const { name, name_native } = selectedCity;
        return name !== name_native ? `(${name_native})` : null;
      };

      return (
        <Stack alignItems="center" margin="0 auto !important">
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            marginTop="-24px"
          >
            {isCorrectAnswer ? (
              <>
                <Smile className="icon-secodary" style={iconStyle} />
                <Typography variant="body4">Congrats!</Typography>
              </>
            ) : (
              <>
                <Sad className="icon-secodary" style={iconStyle} />
                <Typography variant="body4">Sorry..</Typography>
              </>
            )}
            <Typography variant="body4">it's</Typography>
          </Stack>

          <Typography variant="h1" sx={{ margin: "6px 0 -12px" }}>
            {selectedCity.name} {renderNameNative()}
          </Typography>
        </Stack>
      );
    } else {
      switch (questionCount) {
        case 0:
          return (
            <>
              <Typography variant="h1" sx={{ marginBottom: "18px" }}>
                Let's Play
              </Typography>
              <Typography variant="body5">
                Do you feel confident? Here you'll challenge one of our most
                difficult city questions!
              </Typography>
            </>
          );
        case citiesLength + 1:
          return <Typography variant="h1">Quiz Completed!</Typography>;
        default:
          return (
            <>
              <Typography variant="body4">
                question {questionCount} of {citiesLength}
              </Typography>
              <Typography variant="h1">Guess which city it is?</Typography>
            </>
          );
      }
    }
  };

  return (
    <Stack
      spacing={1}
      direction="column"
      alignItems="start"
      margin="36px 0 30px"
    >
      {renderTitle()}
    </Stack>
  );
};

export default PanelTitle;
