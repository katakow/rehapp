import { Grid } from "@material-ui/core";
import { Container } from "@mui/material";
import HeaderLogin from "../coponents/HeaderLogin";
import NavBar from "../coponents/NavBar";
import LogIn from "../coponents/LogIn";
import GreenButtons from "../coponents/GreenButtons";

const Login = function () {
  return (
    <body>
      <Container>
        <NavBar />
        <div className="bodyNav">LOGOWANIE</div>
      </Container>
      <HeaderLogin />
      <Container className="bodyLogin">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          lg
        >
          <Grid item>
            <div>Zaloguj się</div>
            <LogIn />
          </Grid>
          <Grid item>
            <div>Nie masz konta?</div>
            <GreenButtons />
          </Grid>
          <Grid item>
            <div>Zaloguj się jako lekarz</div>
            <LogIn />
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};

export default Login;
