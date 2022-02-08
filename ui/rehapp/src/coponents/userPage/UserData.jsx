/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-undef */
import { Grid, FormLabel } from "@mui/material";
import * as React from "react";

const UserData = function () {
  return (
    <Grid
      container
      direction="row"
      spacing="200px"
      justifyContent="space-around"
    >
      <Grid item>
        <Grid container direction="column" spacing="50px">
          <Grid item>
            <FormLabel component="legend">imię</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">nazwisko</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">mail</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">pesel</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">waga</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">wzrost</FormLabel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing="50px">
          <Grid item>
            <FormLabel component="legend">chorby współistniejące</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">odbyte szczepienia</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">alergie</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">dieta</FormLabel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing="50px">
          <Grid item>
            <FormLabel component="legend">test na covid</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">objawy</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">przejście</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">leki</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">szcepionka na covid</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">nazwa szczepionki</FormLabel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserData;
