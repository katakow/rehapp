/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import PersonIcon from "@mui/icons-material/Person";
import Axios from "axios";
import { useEffect, useState, useCallback } from "react";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditDoc from "../../coponents/docPage/buttons/EditDoc";

const DocProfile = function ({ title }) {
  const [doctor, setDoctor] = useState(null);
  const [doctorID, setDoctorID] = useState(1);

  const getPatient = useCallback(() => {
    Axios.get(`http://localhost:5080/Doctors/${doctorID}`).then((response) => {
      setDoctor(response.data);
      console.log(response);
    });
  }, [doctorID]);

  useEffect(() => {
    getPatient();
  }, [getPatient]);

  useEffect(() => {
    setDoctorID(1);
  }, [setDoctorID]);

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
            justifyContent="space-around"
            alignContent="center"
          >
            <Grid item>
              <PersonIcon
                sx={{
                  fontSize: "270px",
                  color: "rgba(106, 144, 100, 0.6)",
                }}
              />
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="70px">
                <Grid item>
                  <FormLabel component="legend">imię</FormLabel>
                  <FormLabel component="legend">
                    {!!doctor && (
                      <strong key={doctor.id}>{doctor.firstName} </strong>
                    )}
                  </FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">nazwisko</FormLabel>
                  <FormLabel component="legend">
                    {!!doctor && (
                      <strong key={doctor.id}>{doctor.lastName} </strong>
                    )}
                  </FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">e-mail</FormLabel>
                  <FormLabel component="legend">
                    {!!doctor && (
                      <strong key={doctor.id}>{doctor.mail} </strong>
                    )}
                  </FormLabel>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="70px">
                <Grid item>
                  <FormLabel component="legend">numer PWZ</FormLabel>
                  <FormLabel component="legend">
                    {!!doctor && <strong key={doctor.id}>{doctor.pwz} </strong>}
                  </FormLabel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditDoc />
        </Grid>
      </Grid>
    </div>
  );
};
DocProfile.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default DocProfile;
