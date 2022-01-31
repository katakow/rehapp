/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUser2 from "../../coponents/userPage/EditUser2";
import UserData3 from "../../coponents/userPage/UserData3";
import UserData4 from "../../coponents/userPage/UserData4";
import ProfilePrev from "../../coponents/userPage/ProfilePrev";

const UserProfile2 = function ({ title }) {
  return (
    <body className="userProfile">
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container>
        <Grid container direction="row" spacing="100px">
          <Grid item>
            <UserData3 />
          </Grid>
          <Grid item>
            <UserData4 />
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing="50px">
              <Grid item>
                <ProfilePrev />
              </Grid>
              <Grid item>
                <EditUser2 />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};
UserProfile2.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserProfile2;
