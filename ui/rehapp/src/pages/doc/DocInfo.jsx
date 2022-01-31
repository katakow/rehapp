/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import InfoPrevent from "../../coponents/InfoPrevent";
import InfoSymptoms from "../../coponents/InfoSymptoms";
import InfoTreatment from "../../coponents/InfoTreatment";

const DocInfo = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
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
DocInfo.defaultProps = {
  title:
    "COVID-19 (ang. coronavirus disease 2019) - jest to ostra choroba zakaźna układu oddechowego wywołana zakażeniem wirusem SARS-CoV-2.",
};
export default DocInfo;
