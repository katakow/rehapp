/* eslint-disable react/jsx-no-undef */
import { Grid, TextField } from "@mui/material";
import * as React from "react";

const EditUserData3 = function () {
  return (
    <Grid container direction="column" spacing="50px" width="300px">
      <Grid item>
        <TextField
          id="standard-basic"
          label="pozytywny wynik testu na covid"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="objawy podczas COVID-19"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="przebieg COVID-19"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="zażywane leki"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="szczepienie na COVID-19"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="nazwa szczepionki"
          variant="standard"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default EditUserData3;
