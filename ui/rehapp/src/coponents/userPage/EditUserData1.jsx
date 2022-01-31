/* eslint-disable react/jsx-no-undef */
import { Grid, TextField } from "@mui/material";
import * as React from "react";

const EditUserData1 = function () {
  return (
    <Grid container direction="column" spacing="40px" width="300px">
      <Grid item>
        <TextField
          id="standard-basic"
          label="imię"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="nazwisko"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="e-mail"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="hasło"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="PESEL"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="waga [kg]"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="wzrost [cm]"
          variant="standard"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default EditUserData1;
