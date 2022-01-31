/* eslint-disable react/jsx-no-undef */
import { Grid, FormLabel } from "@mui/material";
import * as React from "react";

const UserData1 = function () {
  return (
    <body className="userProfile">
      <Grid container direction="column" spacing="50px">
        <Grid item>
          <FormLabel component="legend">imię</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">nazwisko</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">e-mail</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">hasło</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">PESEL</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">waga</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">wzrost</FormLabel>
        </Grid>
      </Grid>
    </body>
  );
};

export default UserData1;
