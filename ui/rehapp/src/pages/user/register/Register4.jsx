/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";
import NavBar from "../../../coponents/mainPages/NavBar";

const Register4 = function () {
  const covidTest = ["tak", "nie"];
  const vName = ["Pfizer", "J&J", "Moderna", "inna"];
  const navigate = useNavigate();
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
              <Container>
                <FormLabel component="legend">
                  Czy szczepiłaś / szczepiłeś się na COVID-19?
                </FormLabel>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      {covidTest.map((d) => (
                        <FormControlLabel
                          value={d}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: "rgba(253, 105, 139, 0.85)",
                                },
                              }}
                            />
                          }
                          label={d}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Container>
            </Grid>
            <Grid item>
              <Container>
                <FormLabel component="legend">
                  Nazwa szczepionki, którą szczepiłaś / szczepiłeś się ostatnim
                  razem
                </FormLabel>
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
                      {vName.map((d) => (
                        <FormControlLabel
                          value={d}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: "rgba(253, 105, 139, 0.85)",
                                },
                              }}
                            />
                          }
                          label={d}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>Strona 4/4</Grid>
            <Grid item>
              <Grid container direction="row" spacing="30px">
                <Grid item>
                  <PrevBToR1 />
                </Grid>
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
                      navigate("/allData");
                    }}
                  >
                    NASTĘPNA STRONA
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register4;
