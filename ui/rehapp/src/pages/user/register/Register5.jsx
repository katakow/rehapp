/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR6 from "../../../coponents/buttons/register/ButtonToR6";
import NavBar from "../../../coponents/NavBar";
import PrevBToR1 from "../../../coponents/buttons/PrevBToR1";
import CheckboxR from "../../../coponents/poll/CheckboxR";
import RadioR5 from "../../../coponents/poll/RadioR5";

const Register5 = function () {
  return (
    <body>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <h1 className="body" align="center">
        <p>
          Prosimy o rzetelność wprowadzanych informacji, abyśmy mogli Ci jak
          najlepiej pomóc.
        </p>
        <p>Dziękujemy!</p>
      </h1>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        className="bodyLogin"
      >
        <Grid item>
          <FormLabel component="legend">
            jakie miałaś / miałeś objawy?
          </FormLabel>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            className="bodyLogin2"
          >
            <Grid item>
              <CheckboxR />
            </Grid>
            <Grid item>
              <CheckboxR />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <FormLabel component="legend">
            jak przeszłaś / przeszedłeś COVID-19?
          </FormLabel>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            className="bodyLogin2"
          >
            <Grid item>
              <RadioR5 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <FormLabel component="legend">
            czy kiedykolwiek miałeś pozytywny wynik testu na COVID-19?
          </FormLabel>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            className="bodyLogin2"
          >
            <Grid item>
              <CheckboxR />
            </Grid>
            <Grid item>
              <CheckboxR />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="75px" />
        <PrevBToR1 />
        <ButtonToR6 />
      </Container>
      Strona 5/6
    </body>
  );
};

export default Register5;
