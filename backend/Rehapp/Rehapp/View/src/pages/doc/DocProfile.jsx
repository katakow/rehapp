/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import PersonIcon from "@mui/icons-material/Person";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditDoc from "../../coponents/docPage/buttons/EditDoc";

const DocProfile = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <Grid
        container
        direction="column"
        spacing="100px"
        justifyContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignContent="center"
          >
            <Grid item>
              <PersonIcon
                sx={{
                  fontSize: "270px",
                  color: "rgba(106, 144, 100, 0.6)",
                }}
              />
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="70px">
                <Grid item>
                  <FormLabel component="legend">imię</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">nazwisko</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">e-mail</FormLabel>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="70px">
                <Grid item>
                  <FormLabel component="legend">PESEL</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">główna specjalizacja</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">numer PWZ</FormLabel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditDoc />
        </Grid>
      </Grid>
    </div>
  );
};
DocProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default DocProfile;
