/* eslint-disable react/prop-types */
import { Container, Grid, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditDocSave from "../../coponents/docPage/EditDocSave";
import Specki from "../../coponents/docPage/Specki";

const DocEdit = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container maxWidth="xl" className="docProf">
        <Grid container direction="row" spacing="250px">
          <Grid item>
            <Container>
              <PersonIcon
                sx={{
                  fontSize: "300px",
                  color: "rgba(106, 144, 100, 0.6)",
                }}
              />
            </Container>
          </Grid>
          <Grid item>
            <Container>
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
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <Grid container direction="column" spacing="100px">
                <Grid item>
                  <Specki />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        <EditDocSave />
      </Container>
    </div>
  );
};
DocEdit.defaultProps = {
  title: "Edytuj wprowadzone wcześniej dane",
};
export default DocEdit;
