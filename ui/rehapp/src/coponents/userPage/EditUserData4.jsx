/* eslint-disable react/jsx-no-undef */
import { Grid, TextField } from "@mui/material";
import * as React from "react";

const EditUserData4 = function () {
  return (
    <Grid container direction="column" spacing="60px" width="300px">
      <Grid item>
        <TextField
          id="standard-basic"
          label="data szczepienia na COVID-19"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="preparat, którym się szczepiłaś / eś"
          variant="standard"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default EditUserData4;
