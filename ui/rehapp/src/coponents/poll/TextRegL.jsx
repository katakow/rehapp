/* eslint-disable react/jsx-no-undef */
import { Grid, TextField } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const TextRegL = function () {
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
    <div className="myDiv">
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
        <InputLabel htmlFor="standard-adornment-password">hasło</InputLabel>
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
    </div>
  );
};

export default TextRegL;
