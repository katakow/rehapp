/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUser2 from "../../coponents/userPage/EditUser2";
import PrevBToR1 from "../../coponents/userPage/PrevBToR1";

const UserProfile = function ({ title }) {
  return (
    <div>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container maxWidth="xl" className="centerEditPatient">
        <Grid container direction="row" spacing="450px">
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="50px">
                <Grid item>
                  <FormLabel component="legend">
                    data przejścia COVID-19
                  </FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">
                    objawy podczas COVID-19
                  </FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">przebieg COVID-19</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">zażywane leki</FormLabel>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="60px">
                <Grid item>
                  <FormLabel component="legend">
                    data szczepienia na COVID-19
                  </FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">
                    preparat, którym się szczepiłaś / eś
                  </FormLabel>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container className="nextButton" align="right">
        <Grid container direction="row" spacing="50px">
          <Grid item>
            <PrevBToR1 />
          </Grid>
          <Grid item>
            <EditUser2 />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
UserProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserProfile;
