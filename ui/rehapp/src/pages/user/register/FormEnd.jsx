/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Grid, FormLabel, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SumUpForms = function (valuesend) {
  const navigate = useNavigate();
  return (
    <Grid container direction="column" spacing="50px">
      <Grid item>
        <Grid
          container
          direction="row"
          spacing="30px"
          justifyContent="space-around"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              spacing="200px"
              justifyContent="space-around"
            >
              <Grid item>
                <Grid container direction="column" spacing="50px">
                  <Grid item>
                    <FormLabel component="legend">{valuesend.name} </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.surname}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{valuesend.email}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{valuesend.pesel}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{valuesend.weight}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{valuesend.height}</FormLabel>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing="50px">
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.diseases}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.vaccines}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.alergies}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{valuesend.diet}</FormLabel>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing="50px">
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.covidTest}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.symptoms}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.courseOfCovid}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{valuesend.drugs}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.covidVaccine}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {valuesend.vaccineName}
                    </FormLabel>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item alignSelf="flex-end">
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
            navigate("/registerEnd");
          }}
        >
          NASTĘPNA STRONA
        </Button>
      </Grid>
    </Grid>
  );
};
export default SumUpForms;
