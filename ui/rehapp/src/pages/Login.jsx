import { Container, Grid } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import HeaderLogin from "../coponents/HeaderLogin";
import NavBarLogin from "../coponents/NavBarLogin";
import LogInUser from "../coponents/LogInUser";
import LogInDoctor from "../coponents/LogInDoctor";
import GreenButtons from "../coponents/buttons/GreenButtons";

const Login = function () {
  return (
    <body>
      <NavBarLogin />
      <div className="bodyNav">LOGOWANIE</div>
      <HeaderLogin />
      <CoronavirusIcon
        className="covid"
        sx={{
          fontSize: "200px",
          color: "rgba(253, 105, 139, 0.85)",
        }}
      />
      <div className="container">
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            className="bodyLogin"
            height={500}
          >
            <Grid item>
              <LogInUser />
            </Grid>
            <Grid item>
              <GreenButtons />
            </Grid>
            <Grid item>
              <LogInDoctor />
            </Grid>
          </Grid>
        </Container>
      </div>
    </body>
  );
};

export default Login;
