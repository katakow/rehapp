/* eslint-disable react/jsx-no-undef */
import { Grid, FormLabel } from "@mui/material";
import * as React from "react";

const UserData1 = function () {
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
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing="50px">
          <Grid item>
            <FormLabel component="legend">choroby współistniejące</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">odbyte szczepienia</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">alergie</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">spożywana dieta</FormLabel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing="50px">
          <Grid item>
            <FormLabel component="legend">
              pozytywny wynik testu na COVID-19
            </FormLabel>
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
          <Grid item>
            <FormLabel component="legend">szczepienie na COVID-19</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel component="legend">nazwa szczepionki</FormLabel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserData1;
