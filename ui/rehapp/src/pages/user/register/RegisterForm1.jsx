import { Grid, TextField, FormControl, Button } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import Sex from "../../../coponents/userPage/register/Sex";

const RegisterForm1 = function (setRootValues) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
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
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: values.password,
      pesel: values.pesel,
      height: values.height,
      weight: values.weight,
      gender: values.gender,
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.values });
  };
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
                value={values.name}
                onChange={handleChange("name")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="standard-basic"
                label="nazwisko"
                variant="standard"
                value={values.surname}
                onChange={handleChange("surname")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="standard-basic"
                label="e-mail"
                variant="standard"
                value={values.email}
                onChange={handleChange("email")}
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
                value={values.pesel}
                onChange={handleChange("pesel")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="standard-basic"
                label="wzrost [cm]"
                variant="standard"
                value={values.height}
                onChange={handleChange("height")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="standard-basic"
                label="waga [kg]"
                variant="standard"
                value={values.weight}
                onChange={handleChange("weight")}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="płeć"
                variant="standard"
                value={values.gender}
                onChange={handleChange("gender")}
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
          <Button
            item
            variant="outlined"
            sx={{
              width: "160px",
              height: "53px",
              color: "black",
              backgroundColor: "rgba(106, 144, 100, 0.37)",
              fontFamily: "Sora",
              borderColor: "rgba(106, 144, 100, 0.37)",
            }}
            onClick={() => {
              navigate("/register/2");
            }}
            handleChange={() => {
              handleClickSetValues(setRootValues);
            }}
          >
            NASTĘPNA STRONA
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>;
  return values;
};

export default RegisterForm1;
