/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@mui/material";
import ButtonToR2 from "../../../coponents/userPage/register/buttons/ButtonToR2";
import NavBar from "../../../coponents/mainPages/NavBar";
import TextRegL from "../../../coponents/userPage/register/TextRegL";
import TextRegR from "../../../coponents/userPage/register/TextRegR";
import Radio from "../../../coponents/userPage/register/Sex";

const Register = function () {
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
        <Grid container direction="row" justifyContent="space-around">
          <TextRegL />
          <TextRegR />
        </Grid>
        <Radio />
        <div className="nextButton">
          <ButtonToR2 />
        </div>
      </body>
      <div className="divek2">Strona 1/6</div>
    </div>
  );
};

export default Register;
