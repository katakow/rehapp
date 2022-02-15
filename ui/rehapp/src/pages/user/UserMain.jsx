/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import NavBarek from "../../coponents/userPage/NavBarek";

const UserMain = function ({ title }) {
  return (
    <div>
      <NavBarek />
      <Grid
        container
        direction="column"
        spacing="200px"
        justifyContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="30px"
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
                    W zakładce Zalecenia dowiesz się m.in. jaka dieta będzie dla
                    Ciebie najepsza lub jaką aktywność fizyczną najlepiej
                    wykonywać.
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
                    W zakładce Badania widoczne są wszystkie badania, o które
                    warto poprosić lekarza rodzinnego.
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
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserMain;
