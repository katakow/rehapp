/* eslint-disable no-shadow */
import { useState, React, useEffect } from "react";
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

const RegisterForm2 = function (setRootValues) {
  const vaccines = ["grypa", "tężec", "krztusiec", "różyczka"];
  const diet = [
    "wegetariańska",
    "wegańska",
    "śródziemnomorska",
    "bezglutenowa",
  ];

  const alergies = ["gluten", "laktoza", "owoce morza", "orzechy"];
  const navigate = useNavigate();
  const [values, setValues] = useState({
    diseases: "",
    vaccines: "",
    alergies: "",
    diet: "",
  });

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [diseases, setDiseases] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://localhost:7080/Diseases")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDiseases(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleClickSetValues = () => {
    setRootValues({
      diseases: values.diseases,
      vaccines: values.vaccines,
      alergies: values.alergies,
      diet: values.diet,
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.values });
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      spacing="200"
    >
      <Grid item>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Container>
              <FormLabel component="legend">choroby współistniejące</FormLabel>
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
                            value={values.diseases}
                            onChange={handleChange("diseases")}
                          />
                        }
                        label={d.label}
                      />
                    ))}
                  </FormGroup>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <FormLabel component="legend">odbyte szczepienia</FormLabel>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <FormGroup>
                  {vaccines.map((d) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            "&.Mui-checked": {
                              color: "rgba(253, 105, 139, 0.85)",
                            },
                          }}
                          value={values.vaccines}
                          onChange={handleChange("vaccines")}
                        />
                      }
                      label={d}
                    />
                  ))}
                </FormGroup>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <FormLabel component="legend">alergie</FormLabel>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <FormGroup>
                  {alergies.map((d) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            "&.Mui-checked": {
                              color: "rgba(253, 105, 139, 0.85)",
                            },
                          }}
                          value={values.alergies}
                          onChange={handleChange("alergies")}
                        />
                      }
                      label={d}
                    />
                  ))}
                </FormGroup>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
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
                            value={values.diet}
                            onChange={handleChange("diet")}
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
          <Grid item>Strona 2/4</Grid>
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
                    navigate("/register/3");
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
export default RegisterForm2;
