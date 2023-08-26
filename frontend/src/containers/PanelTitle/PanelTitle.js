import React from "react";
import { Stack, Typography } from "@mui/material";

import { useQuestionCountContext } from "../../stores/questionCountStore";
import { useSelectedCityContext } from "../../stores/selectedCityStore";
import Smile from "../../images/smile_black.svg";
import Sad from "../../images/sad_black.svg";

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
                <Smile className="icon-secondary" style={iconStyle} />
                <Typography variant="body3" sx={{ fontWeight: 800 }}>
                  Congrats!
                </Typography>
              </>
            ) : (
              <>
                <Sad className="icon-secondary" style={iconStyle} />
                <Typography variant="body3" sx={{ fontWeight: 800 }}>
                  Sorry..
                </Typography>
              </>
            )}
            <Typography variant="body3">it's</Typography>
          </Stack>

          <Typography variant="h1" sx={{ margin: "8px 0 -12px" }}>
            {selectedCity.name} {renderNameNative()}
          </Typography>
        </Stack>
      );
    } else {
      switch (questionCount) {
        case 0:
          return (
            <>
              <Typography variant="h1">Let's Play</Typography>
              <Typography
                variant="body1"
                lineHeight={2}
                margin="8px 0 30px !important"
              >
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
              <Typography variant="body3" margin="0 0 8px !important">
                question {questionCount} of {citiesLength}
              </Typography>
              <Typography variant="h1" margin="0 0 20px !important">
                Guess which city it is?
              </Typography>
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
      margin="32px 0 30px"
    >
      {renderTitle()}
    </Stack>
  );
};

export default PanelTitle;
