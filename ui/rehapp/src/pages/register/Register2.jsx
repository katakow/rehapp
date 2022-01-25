/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import NextButtonReg from "../../coponents/buttons/NextButtonReg";
import NavBar from "../../coponents/NavBar";
import PrevButtonReg from "../../coponents/buttons/PrevButtonReg";
import TextRegL from "../../coponents/TextRegL";
import TextRegR from "../../coponents/TextRegR";

const Register2 = function () {
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
        <TextRegL />
        <TextRegR />
      </Grid>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="15px" />
        <PrevButtonReg />
        <NextButtonReg />
      </Container>
    </body>
  );
};

export default Register2;
