/* eslint-disable react/jsx-no-undef */
import { Grid, FormLabel } from "@mui/material";
import * as React from "react";

const UserData2 = function () {
  return (
    <body className="userProfile">
      <Grid container direction="column" spacing="50px">
        <Grid item>
          <FormLabel component="legend">data przejścia COVID-19</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">objawy podczas COVID-19</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">przebieg COVID-19</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">zażywane leki</FormLabel>
        </Grid>
      </Grid>
    </body>
  );
};

export default UserData2;
