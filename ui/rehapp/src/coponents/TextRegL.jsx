import { Grid, TextField } from "@mui/material";

const TextRegL = function () {
  return (
    <div className="myDiv">
      <Grid />
      <TextField
        fullWidth
        id="standard-basic"
        label="imię"
        variant="standard"
      />
      <Grid />
      <TextField
        fullWidth
        id="standard-basic"
        label="nazwisko"
        variant="standard"
      />
      <Grid />
      <TextField
        fullWidth
        id="standard-basic"
        label="e-mail"
        variant="standard"
      />
      <Grid />
      <TextField
        fullWidth
        id="standard-basic"
        label="hasło"
        variant="standard"
      />
    </div>
  );
};

export default TextRegL;
