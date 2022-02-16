/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState, React } from "react";

import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Input,
} from "@mui/material";
import NavBar from "../../../coponents/mainPages/NavBar";

const RegisterDefault = function () {
  const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [diseases, setDiseases] = useState([]);
  const [allergies, setAlleriges] = useState([]);
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7080/Diseases")
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setDiseases(result);
        },
        (error) => {
          // setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  useEffect(() => {
    fetch("https://localhost:7080/Allergies")
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setAlleriges(result);
        },
        (error) => {
          //  setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  useEffect(() => {
    fetch("https://localhost:7080/Diets")
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setDiet(result);
        },
        (error) => {
          // setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            spacing="100"
          >
            <Grid item>
              <Grid container direction="row" justifyContent="space-around">
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                  >
                    <Grid item>
                      <TextField
                        fullWidth
                        id="imie"
                        label="imię"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        id="nazwisko"
                        label="nazwisko"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        id="mail"
                        label="mail"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item>
                      <FormControl fullWidth variant="standard">
                        <InputLabel
                          htmlFor="standard-adornment-password"
                          id="password"
                          label="password"
                        >
                          hasło
                        </InputLabel>
                        <Input label="password" />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              spacing="200"
            >
              <Grid item>
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item>
                    <FormLabel component="legend">
                      choroby współistniejące
                    </FormLabel>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <FormGroup>
                          {diseases.map((d) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    "&.Mui-checked": {
                                      color: "rgba(253, 105, 139, 0.85)",
                                    },
                                  }}
                                  key={d.id}
                                />
                              }
                              label={d.label}
                            />
                          ))}
                        </FormGroup>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <FormLabel component="legend">alergie</FormLabel>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FormGroup>
                        {allergies.map((d) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  "&.Mui-checked": {
                                    color: "rgba(253, 105, 139, 0.85)",
                                  },
                                }}
                                key={d.id}
                              />
                            }
                            label={d.label}
                          />
                        ))}
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">stosowana dieta</FormLabel>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="brak"
                          name="radio-buttons-group"
                        >
                          {diet.map((d) => (
                            <FormControlLabel
                              value="wegetariańska"
                              control={
                                <Radio
                                  sx={{
                                    "&.Mui-checked": {
                                      color: "rgba(253, 105, 139, 0.85)",
                                    },
                                  }}
                                  key={d.id}
                                />
                              }
                              label={d.label}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              spacing="60"
            >
              <Grid item alignSelf="center">
                <FormLabel component="legend">
                  Czy kiedykolwiek miałeś pozytywny wynik testu na COVID-19?
                </FormLabel>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Czy miałeś pozytywny wynik testu na COVID-19? Wpisz 'tak' lub 'nie'"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Grid item alignSelf="center">
                ODPOWIEDZ TYLKO, JEŚLI POWYŻEJ ZAZNACZYŁAŚ / ZAZNACZYŁEŚ{" "}
                <strong>TAK</strong>
              </Grid>
              <Grid item>
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item />
                  <Grid item>
                    <FormLabel component="legend" maxWidth>
                      jak przeszłaś / przeszedłeś COVID-19?
                    </FormLabel>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <TextField
                          fullWidth
                          id=""
                          label="Jak przeszłaś/ przeszedłeś COVID-19? Wpisz jedną z czterech dostępnych opcji: 'bezobjawowo', 'lekko', 'średnio', 'ciężko'"
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterDefault;
