/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import GreenSmallButton from "../coponents/GreenSmallButton";
import NavBar from "../coponents/NavBar";

const Register = function ({ title }) {
  const navigate = useNavigate();
  return (
    <body>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <h1 className="body" align="center">
        {title}
      </h1>
      <GreenSmallButton
        onClick={() => {
          navigate("/login");
        }}
      />
    </body>
  );
};

Register.defaultProps = {
  title:
    "Prosimy o rzetelność wprowadzanych informacji, " +
    "abyśmy mogli Ci jak najlepiej pomóc. " +
    "\n Dziękujemy!",
};
export default Register;
