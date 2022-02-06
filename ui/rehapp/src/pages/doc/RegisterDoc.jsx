/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import * as React from "react";
import ButtonToProfile from "../../coponents/docPage/buttons/ButtonToProfile";
import NavBar from "../../coponents/mainPages/NavBar";
import TextFieldDoc from "../../coponents/docPage/TextFieldDoc";
import Specializations from "../../coponents/docPage/Specializations";
import SexDoc from "../../coponents/docPage/SexDoc";

const Register = function () {
  return (
    <content>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <h1 align="center">
        <p>Prosimy o rzetelność wprowadzanych informacji.</p>
        <p>Dziękujemy!</p>
      </h1>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing="30"
      >
        <Grid item>
          <Specializations />
        </Grid>
        <Grid item>
          <TextFieldDoc />
          <SexDoc />
        </Grid>

        <Grid item alignSelf="flex-end">
          <ButtonToProfile />
        </Grid>
      </Grid>
    </content>
  );
};

export default Register;
