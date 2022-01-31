/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUser from "../../coponents/userPage/EditUser";
import ProfileNext from "../../coponents/userPage/ProfileNext";
import UserData1 from "../../coponents/userPage/UserData1";
import UserData2 from "../../coponents/userPage/UserData2";

const UserProfile = function ({ title }) {
  return (
    <body className="userProfile">
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container>
        <Grid container direction="row" spacing="200px">
          <Grid item>
            <UserData1 />
          </Grid>
          <Grid item>
            <UserData2 />
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing="50px">
              <Grid item>
                <ProfileNext />
              </Grid>
              <Grid item>
                <EditUser />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};
UserProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserProfile;
