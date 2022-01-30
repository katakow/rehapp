import { Grid, TextField, Container } from "@mui/material";

import LogInUser from "./userPage/LogInUser";

const LogIn = function () {
  return (
    <Container maxWidth="xl">
      <Grid container direction="column" spacing="40px">
        <Grid item>Zaloguj się</Grid>
        <Grid item maxWidth="100px">
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
    </Container>
  );
};

export default LogIn;
