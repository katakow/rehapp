/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";

import NavBarek from "../../coponents/userPage/NavBarek";
import EditUser from "../../coponents/userPage/EditUser";
import UserData from "../../coponents/userPage/UserData";

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
              <UserData />
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
