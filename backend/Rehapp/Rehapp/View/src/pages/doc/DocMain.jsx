/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";

const UserMain = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />{" "}
      <Grid
        container
        direction="column"
        spacing="200px"
        justifyContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>{" "}
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="50px"
            justifyContent="space-around"
            alignContent="center"
          >
            <Grid item>
              <Grid container direction="row" alignContent="center">
                <Box
                  sx={{
                    width: 320,
                    height: 250,
                    backgroundColor: "rgba(106, 144, 100, 0.37)",
                    color: "black",
                    borderRadius: 15,
                    bottom: 200,
                  }}
                >
                  <div className="box">
                    W zakładce Mój profil możesz zobaczyć i edytować wszystkie
                    dane wprowadzone przez Ciebie przy rejestracji.
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" alignContent="center">
                <Box
                  sx={{
                    width: 320,
                    height: 250,
                    backgroundColor: "rgba(106, 144, 100, 0.37)",
                    color: "black",
                    borderRadius: 15,
                    bottom: 200,
                  }}
                >
                  <div className="box">
                    W zakładce Pacjenci możesz przejrzeć i edytować dane
                    wszystkich pacjentów.
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" alignContent="center">
                <Box
                  sx={{
                    width: 320,
                    height: 250,
                    backgroundColor: "rgba(106, 144, 100, 0.37)",
                    color: "black",
                    borderRadius: 15,
                    bottom: 200,
                  }}
                >
                  <div className="box">
                    W zakładce Informacje znajdziesz aktualne informacje
                    dotyczące COVID-19.
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
UserMain.defaultProps = {
  title: "Witamy w trybie lekarza / specjalisty! ",
};
export default UserMain;
