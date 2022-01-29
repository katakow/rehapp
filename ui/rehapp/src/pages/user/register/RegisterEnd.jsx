/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import ButtonToProfile from "../../../coponents/buttons/ButtonToProfile";
import PrevBToR1 from "../../../coponents/buttons/PrevBToR1";
import NavBar from "../../../coponents/NavBar";

const Register = function () {
  return (
    <body>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <Container maxWidth="lg">
        <h1 align="center" className="headeR">
          Dziękujemy za wypełnienie ankiety!
        </h1>
        <h1 align="center" className="divek">
          W zakładce “Mój profil” możesz zobaczyć i edytować wszystkie
          informacje, które wprowadziłaś / wprowadziłeś.
        </h1>
      </Container>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="75px" />
        <PrevBToR1 />
        <ButtonToProfile />
      </Container>
    </body>
  );
};

export default Register;
