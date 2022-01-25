import { TextField, Grid } from "@mui/material";
import GreenSmallButton from "./GreenSmallButton";

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