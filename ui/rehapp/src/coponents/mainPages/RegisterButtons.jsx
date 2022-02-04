import { Button, Grid, Container } from "@mui/material";

import { useNavigate } from "react-router-dom";

const RegisterButtons = function () {
  const navigate = useNavigate();
  return (
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
              navigate("/register");
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
  );
};

export default RegisterButtons;
