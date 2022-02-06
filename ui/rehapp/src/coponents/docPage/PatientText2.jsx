import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

const PatientEditText = function () {
  return (
    <div>
      <Container maxWidth="400px">
        <Grid container direction="column" spacing="50px">
          <Grid item>
            <FormLabel>pozytywny wynik testu na COVID-19</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel>objawy podczas COVID-19</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel>przebieg COVID</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel>leki zażywane podczas COVID-19</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel>szczepienie na COVID-19</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel>
              nazwa szczepionki, którym pacjent się szczepił
            </FormLabel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PatientEditText;
