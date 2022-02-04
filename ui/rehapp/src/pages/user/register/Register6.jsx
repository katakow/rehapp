/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR7 from "../../../coponents/userPage/register/buttons/ButtonToR7";
import NavBar from "../../../coponents/mainPages/NavBar";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import VaccineDate from "../../../coponents/userPage/register/VaccineDate";
import RadioR4 from "../../../coponents/userPage/register/CovidTest";

const Register6 = function () {
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
                      <VaccineDate />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="nextButton">
          <Grid container direction="row" spacing="30px">
            <Grid item>
              <PrevBToR1 />
            </Grid>
            <Grid item>
              <ButtonToR7 />
            </Grid>
          </Grid>
        </div>
      </body>
      <div className="divek2">Strona 6/6</div>
    </div>
  );
};

export default Register6;
