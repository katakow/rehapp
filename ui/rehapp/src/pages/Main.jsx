import { Button, Container, Grid } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { useNavigate } from "react-router-dom";
import Header from "../coponents/mainPages/Header";
import NavBarLogin from "../coponents/mainPages/NavBarLogin";
import LogInUser from "../coponents/mainPages/LogInUser";
import LogInDoctor from "../coponents/mainPages/LogInDoctor";

const Main = function () {
  const navigate = useNavigate();
  return (
    <content>
      <NavBarLogin />
      <div className="bodyNav">LOGOWANIE</div>
      <Grid container direction="column" spacing="200">
        <Grid item>
          <Header />
          <CoronavirusIcon
            className="covid"
            sx={{
              fontSize: "200px",
              color: "rgba(253, 105, 139, 0.85)",
            }}
          />
        </Grid>
        <Grid item>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
              spacing="10"
            >
              <Grid item>
                <LogInUser />
              </Grid>
              <Grid item>
                <Container align="center">
                  <Grid container direction="column" spacing="50px">
                    <Grid item>Nie masz konta?</Grid>

                    <Grid item>
                      <Button
                        item
                        variant="outlined"
                        sx={{
                          width: "255px",
                          height: "93px",
                          color: "black",
                          backgroundColor: "rgba(106, 144, 100, 0.37)",
                          fontFamily: "Sora",
                          borderColor: "rgba(106, 144, 100, 0.37)",
                        }}
                        onClick={() => {
                          navigate("/register/1");
                        }}
                      >
                        ZAREJESTRUJ SIĘ
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        item
                        variant="outlined"
                        sx={{
                          width: "255px",
                          height: "93px",
                          color: "black",
                          backgroundColor: "rgba(106, 144, 100, 0.37)",
                          fontFamily: "Sora",
                          borderColor: "rgba(106, 144, 100, 0.37)",
                        }}
                        onClick={() => {
                          navigate("/register/doc");
                        }}
                      >
                        ZAREJESTRUJ SIĘ JAKO LEKARZ
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item>
                <LogInDoctor />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </content>
  );
};

export default Main;
