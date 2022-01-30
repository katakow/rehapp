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
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
          className="bodyLogin"
        >
          <Specki />
          <TextFieldDoc />
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
