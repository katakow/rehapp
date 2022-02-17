/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import InfoPrevent from "../../coponents/infoPage/InfoPrevent";
import InfoSymptoms from "../../coponents/infoPage/InfoSymptoms";
import InfoTreatment from "../../coponents/infoPage/InfoTreatment";

const UserInfo = function ({ title }) {
  return (
    <div>
      <NavBarek />
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
          <Grid container direction="column" spacing="10">
            <Grid item>Przydatne linki:</Grid>
            <Grid item>
              {" "}
              <a href="https://pacjent.gov.pl/koronawirus"> Strona rządowa </a>
            </Grid>
            <Grid item>
              <a href="https://www.mp.pl/pacjent/choroby-zakazne/koronawirus">
                Artykuły naukowe{" "}
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
UserInfo.defaultProps = {
  title:
    "COVID-19 (ang. coronavirus disease 2019) - jest to ostra choroba zakaźna układu oddechowego wywołana zakażeniem wirusem SARS-CoV-2.",
};
export default UserInfo;
