/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR6 from "../../../coponents/userPage/register/buttons/ButtonToR6";
import NavBar from "../../../coponents/mainPages/NavBar";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import Alergies from "../../../coponents/userPage/register/Alergies";
import CovidSymptoms from "../../../coponents/userPage/register/CovidSymptoms";

const Register5 = function () {
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
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
          className="bodyLogin"
        >
          <Grid item>
            <FormLabel component="legend" maxWidth>
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
                <Alergies />
              </Grid>
              <Grid item>
                <Alergies />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <FormLabel component="legend" maxWidth>
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
                <CovidSymptoms />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <FormLabel component="legend" maxWidth>
              jakie leki zażywałaś / zażywałeś?
            </FormLabel>
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
        </Grid>
        <div className="nextButton">
          <Grid container direction="row" spacing="30px">
            <Grid item>
              <PrevBToR1 />
            </Grid>
            <Grid item>
              <ButtonToR6 />
            </Grid>
          </Grid>
        </div>
      </body>
      <div className="divek2">Strona 5/6</div>
    </div>
  );
};

export default Register5;
