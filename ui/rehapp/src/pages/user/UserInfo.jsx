/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import InfoPrevent from "../../coponents/InfoPrevent";
import InfoSymptoms from "../../coponents/InfoSymptoms";
import InfoTreatment from "../../coponents/InfoTreatment";

const UserInfo = function ({ title }) {
  return (
    <body className="userProfile">
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container className="container">
        <Grid container direction="row" spacing="30px">
          <Grid item>
            <InfoPrevent />
          </Grid>
          <Grid item>
            <InfoSymptoms />
          </Grid>
          <Grid item>
            <InfoTreatment />
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};
UserInfo.defaultProps = {
  title:
    "COVID-19 (ang. coronavirus disease 2019) - jest to ostra choroba zakaźna układu oddechowego wywołana zakażeniem wirusem SARS-CoV-2.",
};
export default UserInfo;
