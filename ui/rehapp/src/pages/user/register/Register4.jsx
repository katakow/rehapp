/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR5 from "../../../coponents/userPage/register/buttons/ButtonToR5";
import NavBar from "../../../coponents/mainPages/NavBar";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import TestDate from "../../../coponents/userPage/register/TestDate";
import CovidTest from "../../../coponents/userPage/register/CovidTest";

const Register4 = function () {
  return (
    <div>
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
        <div className="divek">
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
              className="bodyLogin"
            >
              <Grid item>
                <Container>
                  <FormLabel component="legend">
                    Czy kiedykolwiek miałeś pozytywny wynik testu na COVID-19?
                  </FormLabel>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch"
                    className="bodyLogin"
                  >
                    <Grid item>
                      <CovidTest />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item>
                <Container>
                  <FormLabel component="legend">
                    Zaznacz dzień, w którym wyszedł Ci pozytywny wynik testu.*
                  </FormLabel>

                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch"
                    className="bodyLogin"
                  >
                    <Grid item>
                      <TestDate />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </div>
        * W przypadku wielokrotnego przejścia choroby, istotna jest tylko data
        ostatniego przechorowania.
        <div className="nextButton">
          <Grid container direction="row" spacing="30px">
            <Grid item>
              <PrevBToR1 />
            </Grid>
            <Grid item>
              <ButtonToR5 />
            </Grid>
          </Grid>
        </div>
      </body>
      <div className="divek2">Strona 4/6</div>
    </div>
  );
};

export default Register4;
