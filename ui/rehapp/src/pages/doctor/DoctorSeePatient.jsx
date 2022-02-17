/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import Axios from "axios";
import { useEffect, useState, useCallback } from "react";
import FormLabel from "@mui/material/FormLabel";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";

const DocPatients = function ({ title }) {
  const [patient, setPatient] = useState(null);
  const [patientID, setPatientID] = useState(0);

  const getPatient = useCallback(() => {
    Axios.get(`http://localhost:5080/Patients/${patientID}`).then(
      (response) => {
        setPatient(response.data);
        console.log(response);
      }
    );
  }, [patientID]);

  useEffect(() => {
    if (patientID) getPatient();
  }, [getPatient, patientID]);

  useEffect(() => {
    const userId = localStorage.getItem("patientId");
    console.log(userId);
    setPatientID(userId);
  }, [setPatientID]);

  return (
    <div>
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
              <FormLabel
                sx={{ fontSize: "30px", color: "rgba(106, 144, 100, 0.8);" }}
              >
                {!!patient && (
                  <strong key={patient.id}>
                    {patient.firstName} {patient.lastName}
                  </strong>
                )}
              </FormLabel>{" "}
              <Grid container direction="column" spacing="50px">
                <Grid item>
                  <FormLabel>PESEL</FormLabel>
                  <FormLabel component="legend">
                    {" "}
                    {!!patient && (
                      <strong key={patient.id}>{patient.pesel} </strong>
                    )}
                  </FormLabel>
                </Grid>

                <Grid item>
                  <FormLabel>pozytywny wynik testu na COVID-19</FormLabel>
                  <FormLabel component="legend">
                    {" "}
                    {!!patient && (
                      <strong key={patient.id}>{patient.covidTest} </strong>
                    )}
                  </FormLabel>
                </Grid>

                <Grid item>
                  <FormLabel>przebieg COVID</FormLabel>
                  <FormLabel component="legend">
                    {" "}
                    {!!patient && (
                      <strong key={patient.id}>{patient.covidCourse} </strong>
                    )}
                  </FormLabel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
DocPatients.defaultProps = {
  title: "Zalecenia i  badania",
};
export default DocPatients;
