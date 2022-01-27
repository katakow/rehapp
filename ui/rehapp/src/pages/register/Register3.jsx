/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid, TextField } from "@mui/material";
import ButtonToR4 from "../../coponents/buttons/ButtonToR4";
import NavBar from "../../coponents/NavBar";
import PrevBToR1 from "../../coponents/buttons/PrevBToR1";
import CheckboxR from "../../coponents/CheckboxR";
import RadioR3 from "../../coponents/RadioR3";

const Register3 = function () {
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
              <TextField
                id="standard-basic"
                label="alergie"
                variant="standard"
                fullWidth
              />
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch"
                className="bodyLogin"
              >
                <Grid item>
                  <CheckboxR />
                </Grid>
                <Grid item>
                  <CheckboxR />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <TextField
                id="standard-basic"
                label="odbyte szczepienia"
                variant="standard"
                fullWidth
              />
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch"
                className="bodyLogin"
              >
                <Grid item>
                  <CheckboxR />
                </Grid>
                <Grid item>
                  <CheckboxR />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <TextField
                id="standard-basic"
                label="dieta"
                variant="standard"
                fullWidth
              />
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch"
                className="bodyLogin"
              >
                <Grid item>
                  <RadioR3 />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="75px" />
        <PrevBToR1 />
        <ButtonToR4 />
      </Container>
      Strona 3/6
    </body>
  );
};

export default Register3;
