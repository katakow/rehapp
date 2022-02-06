/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@mui/material";
import ButtonToProfile from "../../../coponents/userPage/register/buttons/ButtonToProfile";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import NavBar from "../../../coponents/mainPages/NavBar";

const Register = function () {
  return (
    <body>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        spacing="100"
      >
        <Grid item>
          <h1 align="center">Dziękujemy za wypełnienie ankiety!</h1>
        </Grid>
        <Grid item>
          <h1 align="center">
            W zakładce “Mój profil” możesz zobaczyć i edytować wszystkie
            informacje, które wprowadziłaś / wprowadziłeś.
          </h1>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="flex-end">
            <Grid item>
              <Grid container direction="row" spacing="30px">
                <Grid item>
                  <PrevBToR1 />
                </Grid>
                <Grid item>
                  <ButtonToProfile />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </body>
  );
};

export default Register;
