/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import PrevBToR1 from "../../../coponents/userPage/register/buttons/PrevButton";

const RegisterForm4 = function (rootValues, setRootValues) {
  const covidVaccine = ["tak", "nie"];
  const vaccineName = ["Pfizer", "J&J", "Moderna", "inna"];

  const navigate = useNavigate();
  const [newValues, setNewValues] = useState({
    covidVaccine: "",
    vaccineName: "",
  });

  const handleClickSetValues = () => {
    setRootValues({
      ...rootValues,
      covidVaccine: newValues.covidVaccine,
      vaccineName: newValues.vaccineName,
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
                    {covidVaccine.map((d) => (
                      <FormControlLabel
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
                        value={newValues.covidVaccine}
                        onChange={handleChange("covidVaccine")}
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
                    {vaccineName.map((d) => (
                      <FormControlLabel
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
                        value={newValues.vaccineName}
                        onChange={handleChange("vaccineName")}
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
                    navigate("/register?id=5");
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
export default RegisterForm4;
