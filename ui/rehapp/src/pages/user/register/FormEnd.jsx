/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Grid, FormLabel, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SumUpForms = function (values) {
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
                    <FormLabel component="legend" values={values.name} />
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.surname}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.email}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.pesel}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.weight}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.height}</FormLabel>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing="50px">
                  <Grid item>
                    <FormLabel component="legend">{values.diseases}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.vaccines}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.alergies}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.diet}</FormLabel>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing="50px">
                  <Grid item>
                    <FormLabel component="legend">{values.covidTest}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.symptoms}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {values.courseOfCovid}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">{values.drugs}</FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {values.covidVaccine}
                    </FormLabel>
                  </Grid>
                  <Grid item>
                    <FormLabel component="legend">
                      {values.vaccineName}
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
