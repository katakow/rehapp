/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUserSave from "../../coponents/userPage/buttons/EditUserSave";

const UserEdit1 = function ({ title }) {
  return (
    <div>
      <NavBarek />
      <Grid container direction="column" spacing="20px">
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="150px"
            justifyContent="center"
          >
            <Grid item>
              <Grid container direction="column" spacing="40px" width="300px">
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
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="60px" width="300px">
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
                    label="odbyte szczepienia"
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
                    label="spożywana dieta"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="50px" width="300px">
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="pozytywny wynik testu na covid"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="objawy podczas COVID-19"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="przebieg COVID-19"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
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
                    label="szczepienie na COVID-19"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="nazwa szczepionki"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditUserSave />
        </Grid>
      </Grid>
    </div>
  );
};
UserEdit1.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserEdit1;
