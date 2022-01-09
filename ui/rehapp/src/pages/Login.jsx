import { Container } from "@mui/material";
import HeaderLogin from "../coponents/HeaderLogin";
import NavBar from "../coponents/NavBar";

const Login = function () {
  return (
    <div className="loginPage">
      <Container>
        <NavBar />
        <div className="bodyLogin">LOGOWANIE</div>
      </Container>
      <HeaderLogin />
    </div>
  );
};

export default Login;
