/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Axios from "axios";
import { useEffect, useState, useCallback } from "react";
import FormLabel from "@mui/material/FormLabel";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditDocSave from "../../coponents/docPage/buttons/EditDocSave";

const DocEdit = function ({ title }) {
  const [doctor, setDoctor] = useState(null);
  const [doctorID, setDoctorID] = useState(0);

  const getDoctor = useCallback(() => {
    Axios.get(`http://localhost:5080/Doctors/${doctorID}`).then((response) => {
      setDoctor(response.data);
      console.log(response);
    });
  }, [doctorID]);

  useEffect(() => {
    if (doctorID) getDoctor();
  }, [getDoctor, doctorID]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setDoctorID(userId);
  }, [setDoctorID]);

  return (
    <div>
      <NavBarekDoc />{" "}
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
                  fontSize: "300px",
                  color: "rgba(106, 144, 100, 0.6)",
                }}
              />
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="50px">
                <Grid item>
                  <FormLabel component="legend">
                    {!!doctor && (
                      <strong key={doctor.d}>{doctor.firstName} </strong>
                    )}
                  </FormLabel>
                  <TextField
                    id="standard-basic"
                    label="imię"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <FormLabel component="legend">
                    {!!doctor && (
                      <strong key={doctor.d}>{doctor.lastName} </strong>
                    )}
                  </FormLabel>
                  <TextField
                    id="standard-basic"
                    label="nazwisko"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <FormLabel component="legend">
                    {!!doctor && <strong key={doctor.d}>{doctor.mail} </strong>}
                  </FormLabel>
                  <TextField
                    id="standard-basic"
                    label="e-mail"
                    variant="standard"
                  />
                </Grid>

                <Grid item>
                  <FormLabel component="legend">
                    {!!doctor && <strong key={doctor.d}>{doctor.pwz} </strong>}
                  </FormLabel>
                  <TextField
                    id="standard-basic"
                    label="numer PWZ"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditDocSave />
        </Grid>
      </Grid>
    </div>
  );
};
DocEdit.defaultProps = {
  title: "Edytuj wprowadzone wcześniej dane",
};
export default DocEdit;
