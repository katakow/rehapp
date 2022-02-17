/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = function () {
  const navigate = useNavigate();

  const [patientData, setPatientData] = useState({
    Mail: "",
    Password: "",
    Id: "",
  });
  const [error, setError] = useState(null);

  const loginPatient = async () => {
    fetch("http://localhost:5080/Patients/Login", {
      headers: { accept: "*/*", "Content-Type": "application/json" },
      method: "POST",

      body: JSON.stringify({
        Mail: patientData.Mail,
        Password: patientData.Password,
      }),
    })
      .then((res) => {
        if (res.status >= 400 && res.status < 600) {
          throw new Error("NIEPOPRAWNE DANE");
        }
        return res.json();
      })
      .then(
        (result) => {
          console.log("result", result);
          localStorage.setItem("userId", result);
          navigate("/user/main");
        },
        (error) => {
          setError(error);
        }
      );
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDataChange = async () => {
    setPatientData();
    console.log(patientData);
    patientData.Mail = document.getElementById("email").value;
    patientData.Password = document.getElementById("password").value;

    console.log(patientData);
    try {
      const response = await loginPatient();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Grid container direction="column" spacing="40px">
      <Grid item>Zaloguj się</Grid>
      <Grid item>
        <TextField
          fullWidth
          id="email"
          label="e-mail / PESEL"
          variant="standard"
        />
      </Grid>
      <Grid item>
        <TextField fullWidth id="password" label="hasło" variant="standard" />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          sx={{
            width: "143px",
            height: "53px",
            color: "black",
            backgroundColor: "rgba(106, 144, 100, 0.37)",
            fontFamily: "Sora",
            borderColor: "rgba(106, 144, 100, 0.37)",
          }}
          onClick={() => {
            handleDataChange();
          }}
        >
          ZALOGUJ SIĘ
        </Button>
      </Grid>
    </Grid>
  );
};

export default LogIn;
