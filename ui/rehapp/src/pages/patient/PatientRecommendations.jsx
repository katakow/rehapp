/* eslint-disable react/prop-types */
import { Grid, FormLabel } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";

const UserRec = function ({ title }) {
  const userId = localStorage.getItem("userId");
  const by3 = (num) => num % 3 === 0;
  const by5 = (num) => num % 5 === 0;
  const by2 = (num) => num % 2 === 0;

  const setDiet = () => {
    if (by3(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong>nisksodowa</strong>
        </FormLabel>
      );

    if (by2(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> wysokobiałkowa </strong>
        </FormLabel>
      );
    if (by5(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> bogata w wapń oraz żelazo</strong>
        </FormLabel>
      );
    return (
      <FormLabel component="legend" sx={{ fontSize: "18px" }}>
        <strong> lekkostrawna </strong>
      </FormLabel>
    );
  };

  const setActivity = () => {
    if (by3(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> basen, spokojna jazda na rowerze </strong>
        </FormLabel>
      );

    if (by2(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> spokojna joga, spacery</strong>
        </FormLabel>
      );
    if (by5(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> rozciąganie, spacery </strong>
        </FormLabel>
      );
    return (
      <FormLabel component="legend" sx={{ fontSize: "18px" }}>
        <strong>jazda na rowerze, joga dynamiczna</strong>
      </FormLabel>
    );
  };
  return (
    <div>
      <h1>
        <NavBarek />
      </h1>{" "}
      <div>
        <Grid container direction="column" spacing="80px">
          <Grid item>
            <h1 align="center">{title}</h1>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              spacing="200px"
              justifyContent="center"
            >
              <Grid item>
                <Grid
                  container
                  direction="column"
                  spacing="200px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <FormLabel component="legend" sx={{ fontSize: "26px" }}>
                      zalecana dieta
                    </FormLabel>
                  </Grid>
                  <Grid item>{setDiet()}</Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  spacing="200px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <FormLabel component="legend" sx={{ fontSize: "26px" }}>
                      odpowiednia aktywność fizyczna
                    </FormLabel>
                  </Grid>
                  <Grid item>{setActivity()}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
UserRec.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserRec;
