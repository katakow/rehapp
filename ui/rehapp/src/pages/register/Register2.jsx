/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid, TextField } from "@mui/material";
import ButtonToR3 from "../../coponents/buttons/ButtonToR3";
import NavBar from "../../coponents/NavBar";
import PrevBToR1 from "../../coponents/buttons/PrevBToR1";
import CheckboxR from "../../coponents/CheckboxR";

const Register2 = function () {
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
                label="choroby współistniejące"
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
                label="przebyte operacje / zabiegi"
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
                label="zażywane leki"
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
        </Grid>
      </Container>
      <Container className="nextButton" maxWidth="2250px" align="right">
        <Grid container direction="row" spacing="15px" />
        <PrevBToR1 />
        <ButtonToR3 />
      </Container>
      Strona 2/6
    </body>
  );
};

export default Register2;
