/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import Box from "../../coponents/userPage/Box";
import Box2 from "../../coponents/userPage/Box2";
import Box3 from "../../coponents/userPage/Box3";
import Box4 from "../../coponents/userPage/Box4";

const UserMain = function ({ title }) {
  return (
    <content>
      <NavBarek />
      <Grid
        container
        direction="column"
        spacing="200px"
        justifyContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="50px"
            justifyContent="space-around"
            alignContent="center"
          >
            <Grid item>
              <Box />
            </Grid>
            <Grid item>
              <Box2 />
            </Grid>
            <Grid item>
              <Box3 />
            </Grid>
            <Grid item>
              <Box4 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </content>
  );
};
UserMain.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserMain;
