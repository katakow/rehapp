/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable func-names */
import { useState, React } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../../coponents/mainPages/NavBar";
import RegisterForm1 from "./RegisterForm1";
import RegisterForm2 from "./RegisterForm2";
import RegisterForm3 from "./RegisterForm3";

import SumUpForms from "./FormEnd";

const RegisterDefault = function () {
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    pesel: "",
    height: "",
    weight: "",
    gender: "",
    diseases: "",
    vaccines: "",
    alergies: "",
    diet: "",
    covidTest: "",
    symptoms: "",
    courseOfCovid: "",
    drugs: "",
    // covidVaccine: "",
    // vaccineName: "",
  });

  const ShowForms = function () {
    switch (id) {
      case 1:
        return <>{RegisterForm1(setValues)}</>;
      case 2:
        return <>{RegisterForm2(setValues)}</>;
      case 3:
        return <> {RegisterForm3(setValues)}</>;
      case 4:
        return <> {SumUpForms(values)}</>;
      default:
    }
  };

  return (
    <content>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <h1 align="center">
        <p>
          Prosimy o rzetelność wprowadzanych informacji, abyśmy mogli Ci jak
          najlepiej pomóc.
        </p>
        <p>Dziękujemy!</p>
      </h1>
      {ShowForms}
    </content>
  );
};

export default RegisterDefault;
