import {
  Box,
  Typography,
  CircularProgress,
  CircularProgressProps,
} from "@mui/material";

interface CircularProgressWithLabelProps extends CircularProgressProps {
  label: number;
}

const CircularProgressWithLabel = ({
  value,
  label,
  color,
}: CircularProgressWithLabelProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        m: "0 auto",
      }}
    >
      <CircularProgress variant="determinate" value={value} color={color} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" color={color} fontWeight={700}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
