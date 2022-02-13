/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import InfoPrevent from "../../coponents/infoPage/InfoPrevent";
import InfoSymptoms from "../../coponents/infoPage/InfoSymptoms";
import InfoTreatment from "../../coponents/infoPage/InfoTreatment";

const DocInfo = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <Grid
        container
        direction="column"
        spacing="100px"
        justifyContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="30px"
            justifyContent="space-around"
          >
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
        </Grid>
        <Grid item alignSelf="flex-end">
          Przydatne linki:
        </Grid>
      </Grid>
    </div>
  );
};
DocInfo.defaultProps = {
  title:
    "COVID-19 (ang. coronavirus disease 2019) - jest to ostra choroba zakaźna układu oddechowego wywołana zakażeniem wirusem SARS-CoV-2.",
};
export default DocInfo;
