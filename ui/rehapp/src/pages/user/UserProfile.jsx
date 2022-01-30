/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUser from "../../coponents/userPage/EditUser";
import ProfileNext from "../../coponents/userPage/ProfileNext";

const UserProfile = function ({ title }) {
  return (
    <div>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container maxWidth="xl" className="docProf">
        <Grid container direction="row" spacing="350px">
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="50px">
                <Grid item>
                  <FormLabel component="legend">imię</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">nazwisko</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">e-mail</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">hasło</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">PESEL</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">waga</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">wzrost</FormLabel>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="60px">
                <Grid item>
                  <FormLabel component="legend">zażywane leki</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">
                    choroby współistniejące
                  </FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">
                    przebyte operacje / zabiegi
                  </FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">alergie</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">odbyte szczepienia</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">spożywana dieta</FormLabel>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container className="profileNext" align="right">
        <Grid container direction="row" spacing="50px">
          <ProfileNext />
          <EditUser />
        </Grid>
      </Container>
    </div>
  );
};
UserProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserProfile;
