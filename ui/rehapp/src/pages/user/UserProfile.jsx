/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { Grid, FormLabel } from "@mui/material";
import Axios from "axios";
import { useEffect, useState, useCallback } from "react";
import NavBarek from "../../coponents/userPage/NavBarek";

const UserProfile = function ({ title }) {
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
    const userId = localStorage.getItem("userId");
    console.log(userId);
    setPatientID(userId);
  }, [setPatientID]);

  return (
    <div>
      <NavBarek />

      <Grid container direction="column" spacing="50px">
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
              <Grid
                container
                direction="row"
                spacing="200px"
                justifyContent="space-around"
              >
                <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">imię</FormLabel>

                      <FormLabel component="legend">
                        {!!patient && (
                          <strong key={patient.id}>{patient.firstName} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">nazwisko</FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>{patient.lastName} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">mail</FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>{patient.mail} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">pesel</FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>{patient.pesel} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">
                        chorby współistniejące
                      </FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>{patient.disease} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">alergie</FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>{patient.allergie} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">dieta</FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>{patient.diet} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid> */}
                <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">test na covid</FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>{patient.covidTest} </strong>
                        )}
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">przejście</FormLabel>
                      <FormLabel component="legend">
                        {" "}
                        {!!patient && (
                          <strong key={patient.id}>
                            {patient.covidCourse}{" "}
                          </strong>
                        )}
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          {/* <EditUser /> */}
        </Grid>
      </Grid>
    </div>
  );
};
UserProfile.defaultProps = {
  title: "Tu możesz przejrzeć wprowadzone wcześniej dane",
};
export default UserProfile;
