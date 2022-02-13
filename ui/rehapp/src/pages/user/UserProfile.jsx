/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { Grid, FormLabel } from "@mui/material";
import Axios from "axios";
import { useEffect, useState, useCallback } from "react";
import NavBarek from "../../coponents/userPage/NavBarek";
import EditUser from "../../coponents/userPage/buttons/EditUser";

const UserProfile = function ({ title }) {
  const [patient, setPatient] = useState(null);
  const [patientID, setPatientID] = useState(1);

  const getPatient = useCallback(() => {
    Axios.get(`https://localhost:7080/Patients/${patientID}`).then(
      (response) => {
        setPatient(response.data);
        console.log(response);
      }
    );
  }, [patientID]);

  useEffect(() => {
    getPatient();
  }, [getPatient]);

  useEffect(() => {
    setPatientID(1);
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
                        {!!patient && <strong>{patient.name} </strong>}
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">nazwisko</FormLabel>
                      <FormLabel component="legend" />
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">mail</FormLabel>
                      <FormLabel component="legend" />
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">pesel</FormLabel>
                      <FormLabel component="legend" />
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">waga</FormLabel>
                      <FormLabel component="legend" />
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">wzrost</FormLabel>
                      <FormLabel component="legend" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">
                        chorby współistniejące
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">
                        odbyte szczepienia
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">alergie</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">dieta</FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing="50px">
                    <Grid item>
                      <FormLabel component="legend">test na covid</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">objawy</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">przejście</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">leki</FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">
                        szcepionka na covid
                      </FormLabel>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">
                        nazwa szczepionki
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditUser />
        </Grid>
      </Grid>
    </div>
  );
};
UserProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserProfile;
