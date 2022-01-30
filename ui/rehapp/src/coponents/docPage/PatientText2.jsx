import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

const PatientEditText = function () {
  return (
    <div className="body">
      <Container maxWidth="400px">
        <Grid container direction="column" spacing="50px">
          <Grid item>
            <FormLabel>data przejścia COVID-19</FormLabel>
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
            <FormLabel>data szczepienia na COVID-19</FormLabel>
          </Grid>
          <Grid item>
            <FormLabel>preparat, którym pacjent się szczepił</FormLabel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PatientEditText;
