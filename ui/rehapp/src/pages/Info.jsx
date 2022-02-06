/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import InfoPrevent from "../coponents/infoPage/InfoPrevent";
import InfoSymptoms from "../coponents/infoPage/InfoSymptoms";
import InfoTreatment from "../coponents/infoPage/InfoTreatment";
import NavBarLogin from "../coponents/mainPages/NavBarLogin";

const Info = function ({ title }) {
  return (
    <content>
      <NavBarLogin />
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
    </content>
  );
};
Info.defaultProps = {
  title:
    "COVID-19 (ang. coronavirus disease 2019) - jest to ostra choroba zakaźna układu oddechowego wywołana zakażeniem wirusem SARS-CoV-2.",
};
export default Info;
