import { Grid, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

const TextDoc = function () {
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
          id="standard-basic"
          label="numer PWZ"
          variant="standard"
        />
      </Grid>
    </div>
  );
};

export default TextDoc;
