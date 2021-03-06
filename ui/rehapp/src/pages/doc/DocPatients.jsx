/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import { Button, Grid } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";

const DocPatients = function ({ title }) {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  const getPatients = () => {
    Axios.get("http://localhost:5080/Patients").then((response) => {
      setPatients(response.data);
      console.log(response);
    });
  };

  return (
    <div>
      <NavBarekDoc />
      <Grid
        container
        direction="column"
        spacing="100px"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Button onClick={getPatients}>Wyświetl listę pacjentów</Button>
          <List sx={{ maxWidth: 500, fontSize: "60px" }}>
            {patients.map((d) => (
              <ListItem
                key={d.id}
                secondaryAction={
                  <IconButton
                    edge="start"
                    aria-label="edit"
                    onClick={() => {
                      navigate("/doc/patientsEdit");
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={d.lastName} secondary={d.firstName} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
DocPatients.defaultProps = {
  title: "Wybierz pacjenta, którego zalecenia / badania chcesz edytować ",
};
export default DocPatients;
