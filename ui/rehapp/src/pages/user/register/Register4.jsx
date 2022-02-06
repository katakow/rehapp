/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@mui/material";
import ButtonToR6 from "../../../coponents/userPage/register/buttons/ButtonToR6";
import NavBar from "../../../coponents/mainPages/NavBar";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import VaccineName from "../../../coponents/userPage/register/VaccineName";
import CovidVaccine from "../../../coponents/userPage/register/CovidVaccine";

const Register4 = function () {
  return (
    <div>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <h1 align="center">
        <p>
          Prosimy o rzetelność wprowadzanych informacji, abyśmy mogli Ci jak
          najlepiej pomóc.
        </p>
        <p>Dziękujemy!</p>
      </h1>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        spacing="100"
      >
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <CovidVaccine />
            </Grid>
            <Grid item>
              <VaccineName />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>Strona 4/4</Grid>
            <Grid item>
              <Grid container direction="row" spacing="30px">
                <Grid item>
                  <PrevBToR1 />
                </Grid>
                <Grid item>
                  <ButtonToR6 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register4;
