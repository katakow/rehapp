/* eslint-disable react/prop-types */

import * as React from "react";
import { Grid, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Specializations from "../../coponents/docPage/Specializations";
import NavBar from "../../coponents/mainPages/NavBar";
import ButtonToProfile from "../../coponents/docPage/buttons/ButtonToProfile";

const Register = function () {
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = React.useState({
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
    <content>
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
          <Specializations />
        </Grid>
        <Grid item>
          <Grid>
            <Grid />
            <TextField
              fullWidth
              id="standard-basic"
              label="imię"
              variant="standard"
            />
            <Grid />
            <TextField
              fullWidth
              id="standard-basic"
              label="nazwisko"
              variant="standard"
            />
            <Grid />
            <TextField
              fullWidth
              id="standard-basic"
              label="e-mail"
              variant="standard"
            />
            <Grid />
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Grid />
            <TextField
              fullWidth
              id="standard-basic"
              label="PESEL"
              variant="standard"
            />
            <Grid />
            <TextField
              fullWidth
              label="numer PWZ"
              variant="standard"
              required
              id="outlined-required"
            />
            <Grid />
            <TextField id="standard-basic" label="płeć" variant="standard" />
          </Grid>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="inna"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="kobieta"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
                label="kobieta"
              />
              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
                value="mężczyzna"
                label="mężczyzna"
              />
              <FormControlLabel
                value="inna"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
                label="inna"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item alignSelf="flex-end">
          <ButtonToProfile />
        </Grid>
      </Grid>
    </content>
  );
};

export default Register;
