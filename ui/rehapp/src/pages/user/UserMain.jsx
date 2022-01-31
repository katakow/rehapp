/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import Box from "../../coponents/userPage/Box";
import Box2 from "../../coponents/userPage/Box2";
import Box3 from "../../coponents/userPage/Box3";
import Box4 from "../../coponents/userPage/Box4";

const UserMain = function ({ title }) {
  return (
    <body className="userProfile">
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <div>
        <Container maxWidth="xl">
          <Grid container direction="row" spacing="390px">
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
        </Container>
      </div>
    </body>
  );
};
UserMain.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserMain;
