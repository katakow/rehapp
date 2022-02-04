/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import StartButtonInfo from "../coponents/mainPages/StartButtonInfo";
import StartButtonMain from "../coponents/mainPages/StartButtonMain";
import Header from "../coponents/mainPages/Header";

const MainPage = function ({ title }) {
  const navigate = useNavigate();
  return (
    <body>
      <Header />
      <CoronavirusIcon
        className="covid"
        sx={{
          fontSize: "200px",
          color: "rgba(253, 105, 139, 0.85)",
        }}
      />
      <div>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            className="bodyLogin"
          >
            <Grid item>
              <h1 className="body" align="center">
                {title}
              </h1>
            </Grid>
            <Container align="center">
              <button1
                onClick={() => {
                  navigate("/info");
                }}
              >
                <StartButtonInfo />
              </button1>
              <button2
                onClick={() => {
                  navigate("/main");
                }}
              >
                <StartButtonMain />
              </button2>
            </Container>
          </Grid>
        </Container>
      </div>
    </body>
  );
};

MainPage.defaultProps = {
  title:
    "Rejestrując się do naszej aplikacji dowiesz się, " +
    "jakie badania warto wykonać po przejściu COVID-19, jaka dieta jest dla Ciebie najlepsza, " +
    "a także jakie ćwiczenia warto wykonywać, by polepszyć jakość życia." +
    "\n Zapraszamy!",
};
export default MainPage;
