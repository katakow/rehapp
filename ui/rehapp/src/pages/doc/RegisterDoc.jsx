/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import * as React from "react";
import ButtonToProfile from "../../coponents/docPage/ButtonToProfile";
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
        className="bodyLogin"
      >
        <Specki />
        <TextFieldDoc />
      </Grid>
      <Radiodoc />
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="15px" />
        <ButtonToProfile />
      </Container>
      Strona 1/6
    </div>
  );
};

export default Register;
