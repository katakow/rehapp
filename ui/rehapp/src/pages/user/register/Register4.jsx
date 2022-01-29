/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR5 from "../../../coponents/userPage/ButtonToR5";
import NavBar from "../../../coponents/NavBar";
import PrevBToR1 from "../../../coponents/userPage/PrevBToR1";
import Calendar from "../../../coponents/userPage/poll/Calendar";
import RadioR4 from "../../../coponents/userPage/poll/RadioR4";

const Register4 = function () {
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
                    <RadioR4 />
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
                    <Calendar />
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="divek2">
        * W przypadku wielokrotnego przejścia choroby, istotna jest tylko data
        ostatniego przechorowania.
      </div>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="75px" />
        <PrevBToR1 />
        <ButtonToR5 />
      </Container>
      Strona 4/6
    </body>
  );
};

export default Register4;
