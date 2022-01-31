/* eslint-disable react/jsx-no-undef */
import { Grid, FormLabel } from "@mui/material";
import * as React from "react";

const UserData2 = function () {
  return (
    <body className="userProfile">
      <Grid container direction="column" spacing="60px">
        <Grid item>
          <FormLabel component="legend">data szczepienia na COVID-19</FormLabel>
        </Grid>
        <Grid item>
          <FormLabel component="legend">
            preparat, którym się szczepiłaś / eś
          </FormLabel>
        </Grid>
      </Grid>
    </body>
  );
};

export default UserData2;
