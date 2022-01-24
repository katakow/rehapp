import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

const GreenButtons = function () {
  return (
    <Grid container direction="column">
      <Button
        variant="contained"
        sx={{
          width: "175px",
          height: "53px",
          color: "black",
          backgroundColor: "rgba(106, 144, 100, 0.37)",
          fontFamily: "Sora",
        }}
      >
        ZAREJESTRUJ SIĘ
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "175px",
          height: "53px",
          color: "black",
          backgroundColor: "rgba(106, 144, 100, 0.37)",
          fontFamily: "Sora",
        }}
      >
        ZAREJESTRUJ SIĘ JAKO LEKARZ
      </Button>
    </Grid>
  );
};

export default GreenButtons;
