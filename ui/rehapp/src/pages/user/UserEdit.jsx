/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUserSave from "../../coponents/userPage/EditUserSave";
import EditUserData1 from "../../coponents/userPage/EditUserData1";
import EditUserData2 from "../../coponents/userPage/EditUserData2";
import EditUserData3 from "../../coponents/userPage/EditUserData3";

const UserEdit1 = function ({ title }) {
  return (
    <content>
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
              <EditUserData1 />
            </Grid>
            <Grid item>
              <EditUserData2 />
            </Grid>
            <Grid item>
              <EditUserData3 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditUserSave />
        </Grid>
      </Grid>
    </content>
  );
};
UserEdit1.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserEdit1;
