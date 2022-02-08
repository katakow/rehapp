/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-undef */
import { TextField } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

const TextRegL = function ({ onAdd }) {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a name");
      return;
    }

    onAdd({ name });

    setName("");
  };

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
    <div onSubmit={onSubmit}>
      <TextField
        fullWidth
        id="standard-basic"
        label="i"
        variant="standard"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="nazwisko"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="e-mail"
        variant="standard"
      />
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
