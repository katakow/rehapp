/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import PatientText1 from "../../coponents/docPage/PatientText1";
import PatientText2 from "../../coponents/docPage/PatientText2";
import PatientText3 from "../../coponents/docPage/PatientText3";
import EditPatientSave from "../../coponents/docPage/buttons/EditPatientSave";

const DocPatients = function ({ title }) {
  return (
    <content>
      <NavBarekDoc />
      <Grid container direction="column" spacing="70px" justifyContent="center">
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="50px"
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid item>
              <PatientText1 />
            </Grid>
            <Grid item>
              <PatientText2 />
            </Grid>
            <Grid item>
              <PatientText3 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditPatientSave />
        </Grid>
      </Grid>
    </content>
  );
};
DocPatients.defaultProps = {
  title: "Edytuj zalecenia / badania",
};
export default DocPatients;
