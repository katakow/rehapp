/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import BoxDoc from "../../coponents/docPage/BoxDoc";
import BoxDoc2 from "../../coponents/docPage/BoxDoc2";
import BoxDoc3 from "../../coponents/docPage/BoxDoc3";

const UserMain = function ({ title }) {
  return (
    <content>
      <NavBarekDoc />{" "}
      <Grid
        container
        direction="column"
        spacing="200px"
        justifyContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>{" "}
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="50px"
            justifyContent="space-around"
            alignContent="center"
          >
            <Grid item>
              <BoxDoc />
            </Grid>
            <Grid item>
              <BoxDoc2 />
            </Grid>
            <Grid item>
              <BoxDoc3 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </content>
  );
};
UserMain.defaultProps = {
  title: "Witamy w trybie lekarza / specjalisty! ",
};
export default UserMain;
