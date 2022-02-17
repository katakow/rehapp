/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import Header from "../coponents/mainPages/Header";

const MainPage = function ({ title }) {
  const navigate = useNavigate();
  return (
    <Grid container direction="column" spacing="150">
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
        <h1 className="body" align="center">
          {title}
        </h1>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item>
            <Button
              variant="text"
              sx={{
                width: 500,
                height: 200,
                color: "rgba(253, 105, 139, 0.85)",
                fontFamily: "Sora",
              }}
              onClick={() => {
                navigate("/info");
              }}
            >
              Jeśli chcesz dowiedzieć się więcej na temat COVID-19, kliknij
              tutaj!
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                width: 480,
                height: 200,
                color: "rgba(106, 144, 100, 0.85)",
                fontFamily: "Sora",
              }}
              onClick={() => {
                navigate("/main");
              }}
            >
              Jeśli chcesz dołączyć do nas lub się zalogować, kliknij tutaj!
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
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
