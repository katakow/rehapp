/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import PatientText1 from "../../coponents/docPage/PatientText1";
import PatientText2 from "../../coponents/docPage/PatientText2";
import PatientText3 from "../../coponents/docPage/PatientText3";
import EditPatientSave from "../../coponents/docPage/EditPatientSave";

const DocPatients = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container className="centerEditPatient">
        <Grid container direction="row" spacing="50px">
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
      </Container>
    </div>
  );
};
DocPatients.defaultProps = {
  title: "Edytuj zalecenia / badania",
};
export default DocPatients;
