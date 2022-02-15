/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@mui/material";
import ButtonToR3 from "../../../coponents/userPage/register/buttons/ButtonToR3";
import NavBar from "../../../coponents/mainPages/NavBar";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";

import Diseases from "../../../coponents/userPage/register/Diseases";
import Alergies from "../../../coponents/userPage/register/Alergies";
import Diet from "../../../coponents/userPage/register/Diet";

const Register2 = function () {
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
        spacing="200"
      >
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Diseases />
            </Grid>

            <Grid item>
              <Alergies />
            </Grid>
            <Grid item>
              <Diet />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>Strona 2/4</Grid>
            <Grid item>
              <Grid container direction="row" spacing="30px">
                <Grid item>
                  <PrevBToR1 />
                </Grid>
                <Grid item>
                  <ButtonToR3 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register2;
