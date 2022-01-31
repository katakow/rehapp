/* eslint-disable react/jsx-no-undef */
import { Grid, FormLabel } from "@mui/material";
import * as React from "react";

const UserData2 = function () {
  return (
    <body className="userProfile">
      <Grid container direction="column" spacing="60px">
        <Grid item>
          <FormLabel component="legend">zażywane leki</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">choroby współistniejące</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">przebyte operacje / zabiegi</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">alergie</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">odbyte szczepienia</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">spożywana dieta</FormLabel>
        </Grid>
      </Grid>
    </body>
  );
};

export default UserData2;
