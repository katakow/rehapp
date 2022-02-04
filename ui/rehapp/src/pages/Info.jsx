/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import InfoPrevent from "../coponents/infoPage/InfoPrevent";
import InfoSymptoms from "../coponents/infoPage/InfoSymptoms";
import InfoTreatment from "../coponents/infoPage/InfoTreatment";
import NavBarLogin from "../coponents/mainPages/NavBarLogin";

const Info = function ({ title }) {
  return (
    <div>
      <NavBarLogin />
      <div className="bodyNav">INFORMACJE</div>

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
    </div>
  );
};
Info.defaultProps = {
  title:
    "COVID-19 (ang. coronavirus disease 2019) - jest to ostra choroba zakaźna układu oddechowego wywołana zakażeniem wirusem SARS-CoV-2.",
};
export default Info;
