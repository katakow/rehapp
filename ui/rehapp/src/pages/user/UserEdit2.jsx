/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUserSave2 from "../../coponents/userPage/EditUserSave2";
import EditUserData3 from "../../coponents/userPage/EditUserData3";
import EditUserData4 from "../../coponents/userPage/EditUserData4";

const UserEdit2 = function ({ title }) {
  return (
    <body>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container>
        <Grid container direction="row" spacing="150px">
          <Grid item>
            <EditUserData3 />
          </Grid>
          <Grid item>
            <EditUserData4 />
          </Grid>
          <Grid item>
            <EditUserSave2 />
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};
UserEdit2.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserEdit2;
