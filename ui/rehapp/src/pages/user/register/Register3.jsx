/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR4 from "../../../coponents/userPage/register/buttons/ButtonToR4";
import NavBar from "../../../coponents/mainPages/NavBar";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import Alergies from "../../../coponents/userPage/register/Alergies";
import Diet from "../../../coponents/userPage/register/Diet";

const Register3 = function () {
  return (
    <div>
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
                  <Alergies />
                </Grid>
                <Grid item>
                  <Alergies />
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
                  <Alergies />
                </Grid>
                <Grid item>
                  <Alergies />
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
                  <Diet />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div className="nextButton">
          <Grid container direction="row" spacing="30px">
            <Grid item>
              <PrevBToR1 />
            </Grid>
            <Grid item>
              <ButtonToR4 />
            </Grid>
          </Grid>
        </div>
      </body>
      <div className="divek2">Strona 3/6</div>
    </div>
  );
};

export default Register3;
