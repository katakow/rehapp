/* eslint-disable react/prop-types */
import { Container, Grid, TextField } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUserSave from "../../coponents/userPage/EditUserSave";

const UserEdit1 = function ({ title }) {
  return (
    <div>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container maxWidth="xl" className="centerEditPatient">
        <Grid container direction="row" spacing="350px">
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="50px" width="300px">
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="imię"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="nazwisko"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="e-mail"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="hasło"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="PESEL"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="waga [kg]"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="wzrost [cm]"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="60px" width="300px">
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="zażywane leki"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="choroby współistniejące"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="przebyte operacje / zabiegi"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="alergie"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="odbyte szczepienia"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="spożywana dieta"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container className="nextButton" align="right">
        <Grid container direction="row" spacing="50px">
          <Grid item>
            <EditUserSave />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
UserEdit1.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserEdit1;
