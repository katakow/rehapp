import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

const PatientEditText = function () {
  return (
    <div>
      <div className="headerEdit">
        <FormLabel
          sx={{ fontSize: "30px", color: "rgba(106, 144, 100, 0.8);" }}
        >
          JAN KOWALSKI
        </FormLabel>{" "}
      </div>
      <div>
        <Container maxWidth="400px">
          <Grid container direction="column" spacing="50px">
            <Grid item>
              <FormLabel>wiek [lata]</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>waga [kg]</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>wzrost [cm]</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>alergie</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>odbyte szczepienia</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>spożywana dieta</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>zażywane leki</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>choroby współistniejące</FormLabel>
            </Grid>
            <Grid item>
              <FormLabel>przebyte operacje / zabiegi</FormLabel>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default PatientEditText;
