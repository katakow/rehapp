import { Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

const PatientEditText = function () {
  return (
    <content>
      <FormLabel sx={{ fontSize: "30px", color: "rgba(106, 144, 100, 0.8);" }}>
        JAN KOWALSKI
      </FormLabel>{" "}
      <Grid container direction="column" spacing="50px">
        <Grid item>
          <FormLabel>PESEL</FormLabel>
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
          <FormLabel>choroby współistniejące</FormLabel>
        </Grid>
      </Grid>
    </content>
  );
};

export default PatientEditText;
