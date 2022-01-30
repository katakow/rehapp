import { TextField, Grid, Container } from "@mui/material";
import LogInDoc from "./buttons/LogInDoc";

const LogInDoctor = function () {
  return (
    <Container>
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
    </Container>
  );
};

export default LogInDoctor;
