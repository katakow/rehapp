/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUserSave from "../../coponents/userPage/EditUserSave";
import EditUserData1 from "../../coponents/userPage/EditUserData1";
import EditUserData2 from "../../coponents/userPage/EditUserData2";

const UserEdit1 = function ({ title }) {
  return (
    <body>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container>
        <Grid container direction="row" spacing="150px">
          <Grid item>
            <EditUserData1 />
          </Grid>
          <Grid item>
            <EditUserData2 />
          </Grid>
          <Grid item>
            <EditUserSave />
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};
UserEdit1.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserEdit1;
