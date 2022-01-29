/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import * as React from "react";
import ButtonToR2 from "../../coponents/userPage/ButtonToR2";
import NavBar from "../../coponents/NavBar";
import TextFieldDoc from "../../coponents/docPage/TextFieldDoc";
import Specki from "../../coponents/docPage/Specki";
import Radiodoc from "../../coponents/docPage/Radiodoc";

const Register = function () {
  return (
    <div className="bodydoc">
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        className="bodyLogin"
      >
        <Specki />
        <TextFieldDoc />
      </Grid>
      <Radiodoc />
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="15px" />
        <ButtonToR2 />
      </Container>
      Strona 1/6
    </div>
  );
};

export default Register;
