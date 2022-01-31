/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import ButtonToR3 from "../../../coponents/userPage/ButtonToR3";
import NavBar from "../../../coponents/NavBar";
import PrevBToR1 from "../../../coponents/userPage/PrevBToR1";
import CheckboxR from "../../../coponents/userPage/poll/CheckboxR";

const Register2 = function () {
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
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            className="bodyLogin"
          >
            <Grid item>
              <FormLabel component="legend">choroby współistniejące</FormLabel>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="bodyLogin2"
              >
                <Grid item>
                  <CheckboxR />
                </Grid>
                <Grid item>
                  <CheckboxR />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <FormLabel component="legend">
                przebyte operacje / zabiegi
              </FormLabel>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="bodyLogin2"
              >
                <Grid item>
                  <CheckboxR />
                </Grid>
                <Grid item>
                  <CheckboxR />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <FormLabel component="legend">zażywane leki</FormLabel>

              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch"
                className="bodyLogin2"
              >
                <Grid item>
                  <CheckboxR />
                </Grid>
                <Grid item>
                  <CheckboxR />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div className="nextButton">
          <Grid container direction="row" spacing="50px">
            <Grid item>
              <PrevBToR1 />
            </Grid>
            <Grid item>
              <ButtonToR3 />
            </Grid>
          </Grid>
        </div>
      </body>
      <div className="divek2">Strona 2/6</div>
    </div>
  );
};

export default Register2;
