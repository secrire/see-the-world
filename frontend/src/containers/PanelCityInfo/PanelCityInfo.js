import React from "react";
import { Stack, Typography, Grid, Box, Button } from "@mui/material";

import { useSelectedCityContext } from "../../stores/selectedCityStore";

import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import Smile from "../../images/smile_black.svg";
import Sad from "../../images/sad_black.svg";

const iconStyle = {
  width: 42,
  height: 42,
};

const PanelCityInfo = ({
  cities,
  questionCount,
  isCorrectAnswer,
  clickNextQuestion,
  clickGetScore,
}) => {
  const { selectedCity } = useSelectedCityContext();

  const progressValue = (questionCount / cities.length) * 100;

  const gridBoxData = [
    { label: "Country", value: selectedCity.country },
    { label: "Contient", value: selectedCity.continent },
    { label: "Population", value: selectedCity.population },
    { label: "Founded", value: selectedCity.founded },
  ];

  const renderNameNative = () => {
    const { name, name_native } = selectedCity;
    return name !== name_native ? `(${name_native})` : null;
  };

  return (
    <>
      <Stack alignItems="center" mb="16px">
        <CircularProgressWithLabel
          value={progressValue}
          label={questionCount}
          color="primary"
        />

        <Stack direction="row" alignItems="center" spacing={1} m="4px 0 4px">
          {isCorrectAnswer ? (
            <Smile className="icon-secondary" style={iconStyle} />
          ) : (
            <Sad className="icon-secondary" style={iconStyle} />
          )}
          <Typography variant="subtitle1" color="secondary" fontWeight="800">
            {isCorrectAnswer ? "Congrats!" : "Sorry.."}
          </Typography>
          <Typography variant="body1" color="secondary">
            it's
          </Typography>
        </Stack>

        <Typography variant="h4" textAlign="center">
          {selectedCity.name} {renderNameNative()}
        </Typography>
      </Stack>

      <Grid container spacing={2.5}>
        {gridBoxData.map((data) => (
          <Grid item xs={6} key={data.label}>
            <Box
              bgcolor="green.main"
              height="60px"
              p="12px 16px"
              borderRadius="6px"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
            >
              <Typography
                variant="caption"
                color="gray.main"
                border="1px solid gray"
                p="2px 8px"
                borderRadius="10px"
                width="fit-content"
              >
                {data.label}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="gray.dark"
                mt="14px"
              >
                {data.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box bgcolor="#D4D1CA" p="12px 16px" borderRadius="6px" m="24px 0 28px">
        <Typography
          variant="caption"
          color="gray.main"
          border="1px solid gray"
          p="2px 8px"
          borderRadius="10px"
          width="fit-content"
        >
          Landmarks
        </Typography>
        <Stack spacing={1} direction="column" mt="14px">
          {selectedCity.landmarks.map((landmark) => (
            <Typography
              key={landmark}
              variant="body1"
              fontWeight="700"
              color="gray.dark"
            >
              {`-  ${landmark}`}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Button
        onClick={
          questionCount === cities.length ? clickGetScore : clickNextQuestion
        }
        color="primary"
        variant="contained"
        fullWidth
      >
        {questionCount === cities.length ? "Get Score" : "Go Next"}
      </Button>
    </>
  );
};

export default PanelCityInfo;
