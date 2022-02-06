/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@mui/material";
import ButtonToR2 from "../../../coponents/userPage/register/buttons/ButtonToR2";
import NavBar from "../../../coponents/mainPages/NavBar";
import TextRegL from "../../../coponents/userPage/register/TextRegL";
import TextRegR from "../../../coponents/userPage/register/TextRegR";
import Sex from "../../../coponents/userPage/register/Sex";

const Register = function () {
  return (
    <content>
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
              <TextRegL />
            </Grid>
            <Grid item>
              <TextRegR />
              <Sex />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>Strona 1/4</Grid>
            <Grid item>
              <ButtonToR2 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </content>
  );
};

export default Register;
