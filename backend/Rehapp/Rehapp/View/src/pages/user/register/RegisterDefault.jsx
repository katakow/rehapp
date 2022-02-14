/* eslint-disable react/no-unstable-nested-components */
import { useState, React, useCallback } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../../coponents/mainPages/NavBar";
import RegisterForm1 from "./RegisterForm1";
import RegisterForm2 from "./RegisterForm2";
import RegisterForm3 from "./RegisterForm3";
import SumUpForms from "./FormEnd";

const RegisterDefault = function (koncowe) {
  console.log(koncowe);
  // setValues(koncowe);
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "none",
    surname: "none",
    email: "none",
    password: "none",
    pesel: "none",
    height: "none",
    weight: "none",
    gender: "none",
    diseases: "none",
    vaccines: "none",
    alergies: "none",
    diet: "none",
    covidTest: "none",
    symptoms: "none",
    courseOfCovid: "none",
    drugs: "none",
    covidVaccine: "none",
    vaccineName: "none",
  });

  const ShowForms = useCallback(() => {
    const setRootValues = (newValues) => {
      console.log("new values", newValues);
      setValues(newValues);
      console.log("Values: ", values);
    };
    console.log(id);
    switch (id) {
      case 1:
        return <>{RegisterForm1(setRootValues)}</>;
      case 2:
        return <>{RegisterForm2(setRootValues)}</>;
      case 3:
        return <> {RegisterForm3(setRootValues)}</>;
      case 4:
        return <> {SumUpForms(values)}</>;
      default:
        return <>{RegisterForm1(setRootValues)}</>;
    }
  }, [id, values]);

  return (
    <div>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <h1 align="center">
        <p>
          Prosimy o rzetelność wprowadzanych informacji, abyśmy mogli Ci jak
          najlepiej pomóc.
        </p>
        <p>Dziękujemy!</p>
      </h1>
      {ShowForms()}
    </div>
  );
};

export default RegisterDefault;
