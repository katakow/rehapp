/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR7 from "../../../coponents/buttons/register/ButtonToR7";
import NavBar from "../../../coponents/NavBar";
import PrevBToR1 from "../../../coponents/buttons/PrevBToR1";
import Calendar2 from "../../../coponents/poll/Calendar2";
import RadioR4 from "../../../coponents/poll/RadioR4";

const Register6 = function () {
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
                  Czy szczepiłaś / szczepiłeś się na COVID-19?
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
                  Podaj datę otrzymania ostatniej dawki szczepionki *
                </FormLabel>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                  className="bodyLogin"
                >
                  <Grid item>
                    <Calendar2 />
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="75px" />
        <PrevBToR1 />
        <ButtonToR7 />
      </Container>
      Strona 6/6
    </body>
  );
};

export default Register6;
