/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import ButtonToR2 from "../../../coponents/buttons/register/ButtonToR2";
import NavBar from "../../../coponents/NavBar";
import TextRegL from "../../../coponents/poll/TextRegL";
import TextRegR from "../../../coponents/poll/TextRegR";
import Radio from "../../../coponents/poll/Radio";

const Register = function () {
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
      <Radio />
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="15px" />
        <ButtonToR2 />
      </Container>{" "}
      Strona 1/6
    </body>
  );
};

export default Register;
