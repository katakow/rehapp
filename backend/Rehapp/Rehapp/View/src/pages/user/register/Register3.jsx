/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@mui/material";
import ButtonToR4 from "../../../coponents/userPage/register/buttons/ButtonToR4";
import NavBar from "../../../coponents/mainPages/NavBar";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import CovidSymptoms from "../../../coponents/userPage/register/CovidSymptoms";
import Drugs from "../../../coponents/userPage/register/Drugs";
import CovidTest from "../../../coponents/userPage/register/CovidTest";

const Register5 = function () {
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
        spacing="60"
      >
        <Grid item alignSelf="center">
          <CovidTest />
        </Grid>
        <Grid item alignSelf="center">
          ODPOWIEDZ TYLKO, JEŚLI POWYŻEJ ZAZNACZYŁAŚ / ZAZNACZYŁEŚ{" "}
          <strong>TAK</strong>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <CovidSymptoms />
            </Grid>
            <Grid item>
              <Drugs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>Strona 3/4</Grid>
            <Grid item>
              <Grid container direction="row" spacing="30px">
                <Grid item>
                  <PrevBToR1 />
                </Grid>
                <Grid item>
                  <ButtonToR4 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register5;
