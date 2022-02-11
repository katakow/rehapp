/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";

const RegisterForm3 = function (rootValues, setRootValues) {
  const symptoms = ["brak smaku", "brak węchu", "duszności", "zmęczenie"];
  const courseOfCovid = ["bezobjawowo", "lekko", "średnio", "ciężko"];
  const drugs = [
    "przeciwgorączkowe",
    "przeciwzapalne",
    "na kaszel",
    "na grypę",
  ];
  const covidTest = ["tak", "nie"];
  const navigate = useNavigate();
  const [newValues, setNewValues] = useState({
    covidTest: "",
    symptoms: "",
    courseOfCovid: "",
    drugs: "",
  });

  const handleClickSetValues = () => {
    setRootValues({
      ...rootValues,
      covidTest: newValues.covidTest,
      symptoms: newValues.symptoms,
      courseOfCovid: newValues.courseOfCovid,
      drugs: newValues.drugs,
    });
  };

  const handleChange = (prop) => (event) => {
    setNewValues({ ...newValues, [prop]: event.target.newValue });
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      spacing="60"
    >
      <Grid item alignSelf="center">
        <Container>
          <FormLabel component="legend">
            Czy kiedykolwiek miałeś pozytywny wynik testu na COVID-19?
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
                defaultValue="brak"
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
                        value={newValues.covidTest}
                        onChange={handleChange("covidTest")}
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
      <Grid item alignSelf="center">
        ODPOWIEDZ TYLKO, JEŚLI POWYŻEJ ZAZNACZYŁAŚ / ZAZNACZYŁEŚ{" "}
        <strong>TAK</strong>
      </Grid>
      <Grid item>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Container>
              <FormLabel component="legend">
                jakie miałaś / miałeś objawy?
              </FormLabel>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <FormGroup>
                    {symptoms.map((d) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              "&.Mui-checked": {
                                color: "rgba(253, 105, 139, 0.85)",
                              },
                            }}
                            value={newValues.symptoms}
                            onChange={handleChange("symptoms")}
                          />
                        }
                        label={d}
                      />
                    ))}
                  </FormGroup>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
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
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="bezobjawowo"
                      name="radio-buttons-group"
                    >
                      {courseOfCovid.map((d) => (
                        <FormControlLabel
                          value={d}
                          label={d}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: "rgba(253, 105, 139, 0.85)",
                                },
                              }}
                              value={newValues.courseOfCovid}
                              onChange={handleChange("courseOfCovid")}
                            />
                          }
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <FormLabel component="legend">
                jakie leki zażywałaś /zażywałeś?
              </FormLabel>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <FormGroup>
                    {drugs.map((d) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              "&.Mui-checked": {
                                color: "rgba(253, 105, 139, 0.85)",
                              },
                            }}
                            value={newValues.drugs}
                            onChange={handleChange("drugs")}
                          />
                        }
                        label={d}
                      />
                    ))}
                  </FormGroup>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>Strona 3/4</Grid>
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
                  handleChange={() => {
                    handleClickSetValues(setRootValues);
                  }}
                  onClick={() => {
                    navigate("/register?id=4");
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
  );
};
export default RegisterForm3;
