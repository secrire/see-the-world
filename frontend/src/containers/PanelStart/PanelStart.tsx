import { Typography, Button } from "@mui/material";

type PanelStartProps = {
  clickStartQuestion: () => void;
};

const PanelStart = ({ clickStartQuestion }: PanelStartProps) => {
  return (
    <>
      <Typography variant="h4" m="40px 0 20px">
        Let's Play
      </Typography>
      <Typography
        variant="subtitle1"
        color="gray.main"
        lineHeight={2}
        mb="60px"
      >
        Do you feel confident? Here you'll challenge one of our most difficult
        city questions!
      </Typography>
      <Button
        onClick={clickStartQuestion}
        color="primary"
        variant="contained"
        fullWidth
      >
        Start
      </Button>
    </>
  );
};

export default PanelStart;
