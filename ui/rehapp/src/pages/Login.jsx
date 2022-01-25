import { Grid } from "@mui/material";
import HeaderLogin from "../coponents/HeaderLogin";
import NavBar from "../coponents/NavBar";
import LogIn from "../coponents/LogIn";
import LogInDoctor from "../coponents/LogInDoctor";
import GreenButtons from "../coponents/GreenButtons";

const Login = function () {
  return (
    <body>
      <NavBar />
      <div className="bodyNav">LOGOWANIE</div>
      <HeaderLogin />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        className="bodyLogin"
        height={500}
      >
        <LogIn />
        <GreenButtons />
        <LogInDoctor />
      </Grid>
    </body>
  );
};

export default Login;
