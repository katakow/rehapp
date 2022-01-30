/* eslint-disable react/prop-types */
import { Container, Grid, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditDocSave from "../../coponents/docPage/EditDocSave";
import SpeckiEdit from "../../coponents/docPage/SpeckiEdit";

const UserMain = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <h1 className="body5" align="center">
        {title}
      </h1>
      <body>
        <Container maxWidth="xl">
          <Grid container direction="row" spacing="250px">
            <Grid item>
              <Container maxWidth="xl">
                <PersonIcon
                  sx={{
                    fontSize: "300px",
                    marginTop: "-40px",
                    color: "rgba(106, 144, 100, 0.6)",
                  }}
                />
              </Container>
            </Grid>
            <Grid item>
              <Container maxWidth="xl">
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
                </Grid>
              </Container>
            </Grid>
            <Grid item>
              <Container maxWidth="xl">
                <Grid container direction="column" spacing="50px">
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
                  <Grid item>
                    <SpeckiEdit />
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </body>
      <EditDocSave />
    </div>
  );
};
UserMain.defaultProps = {
  title: "Tu możesz przejrzeć i edytować wprowadzone wcześniej dane",
};
export default UserMain;
