import React from "react";
import { Stack, Typography, Grid, Box, Button } from "@mui/material";

import { useSelectedCityContext } from "../../stores/selectedCityStore";

import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import Smile from "../../images/smile_black.svg";
import Sad from "../../images/sad_black.svg";

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

  const iconStyle = {
    width: 42,
    height: 42,
  };

  const renderNameNative = () => {
    const { name, name_native } = selectedCity;
    return name !== name_native ? `(${name_native})` : null;
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack alignItems="center" margin="0 auto !important">
          <CircularProgressWithLabel
            value={progressValue}
            label={questionCount}
          />
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

        <Grid container spacing={2.5}>
          {gridBoxData.map((data) => (
            <Grid item xs={6} key={data.label}>
              <Box
                sx={{
                  bgcolor: "#EAEEE2",
                  height: "60px",
                  p: 2,
                  borderRadius: "6px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="body6"
                  sx={{
                    border: "1px solid gray",
                    p: "2px 8px",
                    borderRadius: "10px",
                  }}
                >
                  {data.label}
                </Typography>
                <Typography variant="h2" marginTop="20px">
                  {data.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#D4D1CA",
          p: 2,
          borderRadius: "6px",
          marginTop: "24px !important",
        }}
      >
        <Typography
          variant="body6"
          sx={{ border: "1px solid gray", p: "2px 8px", borderRadius: "10px" }}
        >
          Landmarks
        </Typography>
        <Stack spacing={1} direction="column" sx={{ margin: "14px 0 0" }}>
          {selectedCity.landmarks.map((landmark) => (
            <Typography variant="body2" key={landmark}>
              {`-  ${landmark}`}
            </Typography>
          ))}
        </Stack>
        <Button
          onClick={
            questionCount === cities.length ? clickGetScore : clickNextQuestion
          }
          color="primary"
          variant="contained"
        >
          {questionCount === cities.length ? "Get Score" : "Go Next"}
        </Button>
      </Box>
    </>
  );
};

export default PanelCityInfo;
