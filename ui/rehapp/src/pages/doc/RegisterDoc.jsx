/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import * as React from "react";
import { Grid, TextField, Button } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../coponents/mainPages/NavBar";
// import loggedPerson from "../LoggedPerson";

const Register = function () {

  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState({
    FirstName: "",
    LastName: "",
    Mail: "",
    Password: "",
    Pwz: "",
    Id: "",
  });
const [error, setError] = useState(null);
  const addDoctor = async () => {
    
    const response = await fetch(
      "https://localhost:7080/Doctors/Doctors/register",
      {
        mode: "cors",
        headers: { accept: "*/*", "Content-Type": "application/json" },
        method: "POST",

        body: JSON.stringify({
          "FirstName": doctorData.FirstName,
          "LastName": doctorData.LastName,
          "Email": doctorData.Mail,
          "Password": doctorData.Password,
          "Pwz": doctorData.Pwz,
        }),
      })
      .then((res) => { 
        if(res.status >= 400 && res.status < 600) {
          throw new Error("Bad response from server");
        }
        res.json()})
      .then(
        (result) => {
          console.log(result);
          navigate("/doc/main")
          return response.json();
        },
        (error) => {
          setError(error);
        }
      )
    
   
    // navigate("/doc/main")
    // return response.json();
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDataChange = async () => {
    setDoctorData();
    console.log(doctorData);
    doctorData.FirstName = document.getElementById("imie").value;
    doctorData.LastName = document.getElementById("nazwisko").value;
    doctorData.Mail = document.getElementById("mail").value;
    doctorData.Password = document.getElementById("haslo").value;
    doctorData.Pwz = document.getElementById("pwz").value;
    

    console.log(doctorData);
    try {
      const response = await addDoctor();
      console.log(response);
    } catch (err) {
      console.log(err);
    }

  };
  return (
    <div>
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
          <Grid>
            <TextField
              fullWidth
              id="imie"
              label="imię"
              variant="standard"
            />

            <TextField
              fullWidth
              id="nazwisko"
              label="nazwisko"
              variant="standard"
            />

            <TextField
              fullWidth
              id="mail"
              label="mail"
              variant="standard"
            />

            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                hasło
              </InputLabel>
              <Input
                id="haslo"
                label="haslo"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility" />
                  </InputAdornment>
                }
              />
            </FormControl>

            <TextField
              fullWidth
              label="pwz"
              variant="standard"
              required
              id="pwz"
            />
          </Grid>

          <Grid item alignSelf="flex-end">
            <Button
              variant="outlined"
              sx={{
                width: "204px",
                height: "95px",
                color: "black",
                backgroundColor: "rgba(106, 144, 100, 0.37)",
                fontFamily: "Sora",
                borderColor: "rgba(106, 144, 100, 0.37)",
              }}

              onClick={handleDataChange}
            >
              PRZEJDŹ DO STRONY GŁÓWNEJ
            </Button>
          </Grid>
        </Grid>{" "}
      </Grid>
    </div>
  );
};

export default Register;
