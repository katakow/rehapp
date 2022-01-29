/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import ButtonToR2 from "../../coponents/buttons/register/ButtonToR2";
import NavBar from "../../coponents/NavBar";
import TextFieldDoc from "../../coponents/docPage/TextFieldDoc";
import Radio from "../../coponents/poll/Radio";

const Register = function () {
  return (
    <body>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        className="bodyLogin"
      >
        <TextFieldDoc />
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
