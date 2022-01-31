/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import UserCheck1 from "../../coponents/userPage/UserCheck1";
import UserCheck2 from "../../coponents/userPage/UserCheck2";
import UserCheck3 from "../../coponents/userPage/UserCheck3";
import UserCheck4 from "../../coponents/userPage/UserCheck4";
import UserExamNext from "../../coponents/userPage/UserExamNext";

const UserExam = function ({ title }) {
  return (
    <body>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container>
        <Grid container direction="column" spacing="90px">
          <Grid item>
            <Grid container direction="row" spacing="90px">
              <Grid item>
                <UserCheck1 />
              </Grid>
              <Grid item>
                <UserCheck2 />
              </Grid>
              <Grid item>
                <UserCheck3 />
              </Grid>
              <Grid item>
                <UserCheck4 />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <UserExamNext />
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};
UserExam.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserExam;
