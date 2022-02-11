/* eslint-disable react/prop-types */
import { Grid, FormLabel } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";

const UserMain = function ({ title }) {
  return (
    <div>
      <h1>
        <NavBarek />
      </h1>{" "}
      <content>
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
                <FormLabel component="legend" sx={{ fontSize: "26px" }}>
                  zalecana dieta
                </FormLabel>
              </Grid>
              <Grid item>
                <FormLabel component="legend" sx={{ fontSize: "26px" }}>
                  suplementacja witamin
                </FormLabel>
              </Grid>
              <Grid item>
                <FormLabel component="legend" sx={{ fontSize: "24px" }}>
                  odpowiednia aktywność fizyczna
                </FormLabel>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </content>
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
