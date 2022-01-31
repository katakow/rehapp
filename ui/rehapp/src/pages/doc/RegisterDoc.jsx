/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import * as React from "react";
import ButtonToProfile from "../../coponents/docPage/ButtonToProfile";
import NavBar from "../../coponents/NavBar";
import TextFieldDoc from "../../coponents/docPage/TextFieldDoc";
import Specki from "../../coponents/docPage/Specki";
import Radiodoc from "../../coponents/docPage/Radiodoc";

const Register = function () {
  return (
    <div>
      <body>
        <NavBar />
        <div className="bodyNav">REJESTRACJA</div>
        <h1 className="body" align="center">
          <p>Prosimy o rzetelność wprowadzanych informacji.</p>
          <p>Dziękujemy!</p>
        </h1>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Specki />
          </Grid>
          <Grid item>
            <TextFieldDoc />
          </Grid>
        </Grid>
        <Radiodoc />
        <div className="nextButton">
          <ButtonToProfile />
        </div>
      </body>
    </div>
  );
};

export default Register;
