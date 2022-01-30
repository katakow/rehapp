/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import BoxDoc from "../../coponents/docPage/BoxDoc";
import BoxDoc2 from "../../coponents/docPage/BoxDoc2";
import BoxDoc3 from "../../coponents/docPage/BoxDoc3";

const UserMain = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <h1 className="main" align="center">
        {title}
      </h1>
      <div>
        <Container align="center">
          <Grid container direction="row" spacing="390px">
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
        </Container>
      </div>
    </div>
  );
};
UserMain.defaultProps = {
  title: "Witamy w trybie lekarza / specjalisty! ",
};
export default UserMain;
