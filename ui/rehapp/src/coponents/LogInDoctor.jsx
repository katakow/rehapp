import { TextField, Grid } from "@mui/material";
import GreenSmallButton from "./buttons/GreenSmallButton";

const LogInDoctor = function () {
  return (
    <div>
      Zaloguj się jako lekarz
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

export default LogInDoctor;
