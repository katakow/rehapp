/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditDocSave from "../../coponents/docPage/buttons/EditDocSave";
import Specializations from "../../coponents/docPage/Specializations";

const DocEdit = function ({ title }) {
  return (
    <content>
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
                  <TextField
                    id="standard-basic"
                    label="imię"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="nazwisko"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="e-mail"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="PESEL"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="numer PWZ"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Specializations />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <EditDocSave />
        </Grid>
      </Grid>
    </content>
  );
};
DocEdit.defaultProps = {
  title: "Edytuj wprowadzone wcześniej dane",
};
export default DocEdit;
