import { Grid, TextField } from "@mui/material";

import LogInUser from "./LogInUser";

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
      <LogInUser />
    </div>
  );
};

export default LogIn;
