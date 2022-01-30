/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import PersonIcon from "@mui/icons-material/Person";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditDoc from "../../coponents/docPage/EditDoc";

const DocProfile = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container maxWidth="xl" className="docProf">
        <Grid container direction="row" spacing="250px">
          <Grid item>
            <Container maxWidth="xl">
              <PersonIcon
                sx={{
                  fontSize: "300px",
                  color: "rgba(106, 144, 100, 0.6)",
                }}
              />
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="100px">
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
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="100px">
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
            </Container>
          </Grid>
        </Grid>
        <EditDoc />
      </Container>
    </div>
  );
};
DocProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default DocProfile;
