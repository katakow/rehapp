/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR4 from "../../../coponents/buttons/register/ButtonToR4";
import NavBar from "../../../coponents/NavBar";
import PrevBToR1 from "../../../coponents/buttons/PrevBToR1";
import CheckboxR from "../../../coponents/poll/CheckboxR";
import RadioR3 from "../../../coponents/poll/RadioR3";

const Register3 = function () {
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
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
          className="bodyLogin"
        >
          <Grid item>
            <FormLabel component="legend">alergie</FormLabel>
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
            <FormLabel component="legend">odbyte szczepienia</FormLabel>

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
            <FormLabel component="legend">stosowana dieta</FormLabel>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
              className="bodyLogin2"
            >
              <Grid item>
                <RadioR3 />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="75px" />
        <PrevBToR1 />
        <ButtonToR4 />
      </Container>
      Strona 3/6
    </body>
  );
};

export default Register3;
