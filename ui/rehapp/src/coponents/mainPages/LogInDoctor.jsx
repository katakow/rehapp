/* eslint-disable no-shadow */
import { TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogInDoctor = function () {
  const navigate = useNavigate();

  const [doctorData, setDoctorData] = useState({
    Mail: "",
    Password: "",
    Id: "",
  });
  const [error, setError] = useState(null);
  const loginDoctor = async () => {
    const response = await fetch("http://localhost:5080/Doctors/Login", {
      headers: { accept: "*/*", "Content-Type": "application/json" },
      method: "POST",

      body: JSON.stringify({
        Mail: doctorData.Mail,
        Password: doctorData.Password,
      }),
    })
      .then((res) => {
        if (res.status >= 400 && res.status < 600) {
          throw new Error("NIEPOPRAWNE DANE LOGOWANIA");
        }
        res.json();
      })
      .then(
        (result) => {
          console.log(result);
          return response.json();
          // navigate("/doc/main");
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
    setDoctorData();
    console.log(doctorData);
    doctorData.Mail = document.getElementById("mail").value;
    doctorData.Password = document.getElementById("haslo").value;

    console.log(doctorData);
    try {
      const response = await loginDoctor();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Grid container direction="column" spacing="40px">
      <Grid item>Zaloguj się jako lekarz</Grid>
      <Grid item>
        <TextField
          fullWidth
          id="mail"
          label="e-mail / PESEL"
          variant="standard"
        />
      </Grid>
      <Grid item>
        <TextField fullWidth id="haslo" label="hasło" variant="standard" />
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
            navigate("/doc/main");
          }}
        >
          ZALOGUJ SIĘ
        </Button>
      </Grid>
    </Grid>
  );
};

export default LogInDoctor;
