/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import ButtonToProfile from "../../../coponents/userPage/ButtonToProfile";
import PrevBToR1 from "../../../coponents/userPage/PrevBToR1";
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
      <div className="nextButton">
        <Grid container direction="row" spacing="50px">
          <Grid item>
            <PrevBToR1 />
          </Grid>
          <Grid item>
            <ButtonToProfile />
          </Grid>
        </Grid>
      </div>
    </body>
  );
};

export default Register;
