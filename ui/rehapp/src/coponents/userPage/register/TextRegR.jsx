import { Grid, TextField } from "@mui/material";

const TextRegR = function () {
  return (
    <div>
      <Grid>
        <Grid />
        <TextField
          fullWidth
          id="standard-basic"
          label="PESEL"
          variant="standard"
        />
        <Grid />
        <TextField
          fullWidth
          id="standard-basic"
          label="wzrost [cm]"
          variant="standard"
        />
        <Grid />
        <TextField
          fullWidth
          id="standard-basic"
          label="waga [kg]"
          variant="standard"
        />

        <Grid />
        <TextField id="standard-basic" label="płeć" variant="standard" />
      </Grid>
    </div>
  );
};

export default TextRegR;
