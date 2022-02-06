import { TextField, Grid } from "@mui/material";
import LogInDoc from "../docPage/buttons/LogInDoc";

const LogInDoctor = function () {
  return (
    <Grid container direction="column" spacing="40px">
      <Grid item>Zaloguj się jako lekarz</Grid>
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
        <LogInDoc />
      </Grid>
    </Grid>
  );
};

export default LogInDoctor;
