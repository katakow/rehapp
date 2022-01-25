import { Grid, TextField } from "@mui/material";
import GreenSmallButton from "./GreenSmallButton";

const LogIn = function () {
  return (
    <div>
      Zaloguj się
      <Grid />
      <TextField
        fullWidth
        id="standard-basic"
        label="e-mail / PESEL"
        variant="standard"
      />
      <Grid />
      <TextField
        fullWidth
        id="standard-basic"
        label="hasło"
        variant="standard"
      />
      <GreenSmallButton />
    </div>
  );
};

export default LogIn;
