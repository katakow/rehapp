/* eslint-disable react/prop-types */
import { Grid, FormLabel } from "@mui/material";

import NavBarek from "../../coponents/userPage/NavBarek";
import EditUser from "../../coponents/userPage/buttons/EditUser";

const UserProfile = function ({ title }) {
  return (
    <content>
      <NavBarek />
      <Grid container direction="column" spacing="50px">
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="30px"
            justifyContent="space-around"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                spacing="200px"
                justifyContent="space-around"
              >
                <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">imię</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">nazwisko</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">mail</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">pesel</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">waga</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">wzrost</FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">
                        chorby współistniejące
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">
                        odbyte szczepienia
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">alergie</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">dieta</FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">test na covid</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">objawy</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">przejście</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">leki</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">
                        szcepionka na covid
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">
                        nazwa szczepionki
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditUser />
        </Grid>
      </Grid>
    </content>
  );
};
UserProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserProfile;
