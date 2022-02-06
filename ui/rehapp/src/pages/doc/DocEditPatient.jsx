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
      <h1 align="center">{title}</h1>
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
      <EditPatientSave />
    </content>
  );
};
DocPatients.defaultProps = {
  title: "Edytuj zalecenia / badania",
};
export default DocPatients;
