import { Grid, TextField } from "@mui/material";

const TextRegR = function () {
  return (
    <div className="myDiv">
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
          label="wzrost"
          variant="standard"
        />
        <Grid />
        <TextField
          fullWidth
          id="standard-basic"
          label="waga"
          variant="standard"
        />
        <Grid />
        <TextField id="standard-basic" label="płeć" variant="standard" />
      </Grid>
    </div>
  );
};

export default TextRegR;