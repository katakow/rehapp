/* eslint-disable react/no-unstable-nested-components */
import { useState, React } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../../coponents/mainPages/NavBar";
import RegisterForm1 from "./RegisterForm1";
import RegisterForm2 from "./RegisterForm2";
import RegisterForm3 from "./RegisterForm3";
import SumUpForms from "./FormEnd";
import RegisterForm4 from "./RegisterForm4";

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

  const setRootValues = (newValues) => {
    console.log("new values", newValues);
    setValues(newValues);
    console.log("Values: ", values);
  };

  const ShowForms = function () {
    switch (id) {
      case 1:
        return <>{RegisterForm1(setRootValues)}</>;
      case 2:
        return <>{RegisterForm2(setRootValues)}</>;
      case 3:
        return <> {RegisterForm3(setRootValues)}</>;
      case 4:
        return <> {RegisterForm4(setRootValues)}</>;
      case 5:
        return <> {SumUpForms(values)}</>;
      default:
        return <>{RegisterForm3(setRootValues)}</>;
    }
  };

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
      <p>{ShowForms}</p>
    </div>
  );
};

export default RegisterDefault;
