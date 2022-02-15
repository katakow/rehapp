/* eslint-disable react/prop-types */

import * as React from "react";
import { Grid, TextField, Button } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
// import Axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import NavBar from "../../coponents/mainPages/NavBar";

const Register = function () {
  // const navigate = useNavigate();
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const [values, setValues] = useState({
  //   amount: "",
  //   Password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });
  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  // const setNewDoctorData = () => {
  //   setDoctorData({
  //     ...doctorData,
  //     FirstName: !doctorData.firstName,
  //     LastName: !doctorData.lastName,
  //     Mail: !doctorData.mail,
  //     Password: !doctorData.password,
  //     Pwz: !doctorData.pwz,
  //     Sex: !doctorData.sex,
  //   });
  // };
  const [doctorData, setDoctorData] = useState({
    FirstName: "",
    LastName: "",
    Mail: "",
    Password: "",
    Pwz: "",
    Id: "",
  });

  const addDoctor = async () => {
    const response = await fetch("https://localhost:7080/Doctors/register", {
      mode: "cors",
      headers: { accept: "*/*", "Content-Type": "application/json" },
      method: "POST",

      body: JSON.stringify({ doctorData }),
    });
    return response.json();
  };

  const handleDataChange = async () => {
    // setDoctorData({ ...doctorData, [prop]: event.target.data });
    setDoctorData();
    console.log(doctorData);
    doctorData.FirstName = document.getElementById("imie").value;
    doctorData.LastName = document.getElementById("nazwisko").value;
    doctorData.Mail = document.getElementById("mail").value;
    doctorData.Password = document.getElementById("haslo").value;
    doctorData.Pwz = document.getElementById("pwz").value;
    doctorData.Id = "2436";

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
              // data={doctorData.FirstName}
            />

            <TextField
              fullWidth
              id="nazwisko"
              label="nazwisko"
              variant="standard"
              // data={doctorData.lastName}
            />

            <TextField
              fullWidth
              id="mail"
              label="mail"
              variant="standard"
              // data={doctorData.mail}
            />

            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                hasło
              </InputLabel>
              <Input
                // type={values.showPassword ? "text" : "Password"}
                // value={doctorData.password}
                id="haslo"
                label="haslo"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      //  onMouseDown={handleMouseDownPassword}
                    >
                      {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                    </IconButton>
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
              // data={doctorData.pwz}
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
              // handleDataChange={() => {
              //  addDoctor;
              // }}
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
