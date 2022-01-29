import { Grid } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import HeaderLogin from "../coponents/HeaderLogin";
import NavBar from "../coponents/NavBar";
import LogIn from "../coponents/LogIn";
import LogInDoctor from "../coponents/LogInDoctor";
import GreenButtons from "../coponents/buttons/GreenButtons";

const Login = function () {
  return (
    <body>
      <NavBar />
      <div className="bodyNav">LOGOWANIE</div>
      <HeaderLogin />
      <CoronavirusIcon
        sx={{
          fontSize: "200px",
          marginLeft: "1800px",
          marginTop: "-40px",
          color: "rgba(253, 105, 139, 0.85)",
        }}
      />

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
