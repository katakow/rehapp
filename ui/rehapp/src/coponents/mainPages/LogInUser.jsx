import { Grid, TextField } from "@mui/material";

import LogInUser from "../userPage/buttons/LogInUser";

const LogIn = function () {
  return (
    <Grid container direction="column" spacing="40px">
      <Grid item>Zaloguj się</Grid>
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="e-mail / PESEL"
          variant="standard"
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="hasło"
          variant="standard"
        />
      </Grid>
      <Grid item>
        <LogInUser />
      </Grid>
    </Grid>
  );
};

export default LogIn;
