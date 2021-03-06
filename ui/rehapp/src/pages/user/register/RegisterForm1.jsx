import { Grid, TextField, FormControl, Button, FormLabel } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import Sex from "../../../coponents/userPage/register/Sex";

const RegisterForm1 = function (rootValues, setRootValues) {
  const navigate = useNavigate();
  const [newValues, setNewValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    pesel: "",
    height: "",
    weight: "",
    gender: "",
  });
  const handleClickSetValues = () => {
    setRootValues({
      ...rootValues,
      name: newValues.name,
      surname: newValues.surname,
      email: newValues.email,
      password: newValues.password,
      pesel: newValues.pesel,
      height: newValues.height,
      weight: newValues.weight,
      gender: newValues.gender,
    });
  };
  const handleChange = (prop) => (event) => {
    setNewValues({ ...newValues, [prop]: event.target.value });
  };
  return (
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
                  value={newValues.name}
                  onChange={handleChange("name")}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="nazwisko"
                  variant="standard"
                  value={newValues.surname}
                  // onChange={handleChange("surname")}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="e-mail"
                  variant="standard"
                  value={newValues.email}
                  // onChange={handleChange("email")}
                />
              </Grid>
              <Grid item>
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    hasło
                  </InputLabel>
                  <Input
                    type={newValues.showPassword ? "text" : "password"}
                    value={newValues.password}
                    // onChange={handleChange("password")}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" justifyContent="space-around">
              <Grid item>
                <FormLabel component="legend"> Płeć</FormLabel>
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
            <Button
              variant="outlined"
              sx={{
                width: "160px",
                height: "53px",
                color: "black",
                backgroundColor: "rgba(106, 144, 100, 0.37)",
                fontFamily: "Sora",
                borderColor: "rgba(106, 144, 100, 0.37)",
              }}
              handleChange={() => {
                handleClickSetValues(setRootValues);
              }}
              onClick={() => {
                navigate("/register/2");
              }}
            >
              NASTĘPNA STRONA
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterForm1;
