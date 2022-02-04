import { Container, Grid } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import Header from "../coponents/mainPages/Header";
import NavBarLogin from "../coponents/mainPages/NavBarLogin";
import LogInUser from "../coponents/mainPages/LogInUser";
import LogInDoctor from "../coponents/mainPages/LogInDoctor";
import RegisterButtons from "../coponents/mainPages/RegisterButtons";

const Main = function () {
  return (
    <body>
      <NavBarLogin />
      <div className="bodyNav">LOGOWANIE</div>
      <Header />
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
              <RegisterButtons />
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

export default Main;
