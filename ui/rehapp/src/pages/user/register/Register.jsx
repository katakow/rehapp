/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { useState, React } from "react";
import { useParams } from "react-router-dom";
import Sex from "../../../coponents/userPage/register/Sex";
import NavBar from "../../../coponents/mainPages/NavBar";
import ButtonToR2 from "../../../coponents/userPage/register/buttons/ButtonToR2";

const Register = function () {
  const { id } = useParams();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        spacing="100"
      >
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Grid container direction="column" justifyContent="space-around">
                <Grid item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="imię"
                    variant="standard"
                    placeholder="name"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="nazwisko"
                    variant="standard"
                  />
                  <TextField placeholder={id} />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="e-mail"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      hasło
                    </InputLabel>
                    <Input
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justifyContent="space-around">
                <Grid item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="PESEL"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="wzrost [cm]"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="waga [kg]"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="płeć"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Sex />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>Strona 1/4</Grid>
            <Grid item>
              <ButtonToR2 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
