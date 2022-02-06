/* eslint-disable react/prop-types */
import { Grid, FormLabel } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";
import UserExamPrev from "../../coponents/userPage/UserExamPrev";

const UserExam2 = function ({ title }) {
  return (
    <content>
      <NavBarek />
      <Grid container direction="column" spacing="100px">
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing="100px">
            <Grid item>
              <FormLabel component="legend" sx={{ fontSize: "26px" }}>
                zachęcamy do udania się do specjalistów
              </FormLabel>
            </Grid>
            <Grid item>
              <FormLabel component="legend" sx={{ fontSize: "26px" }}>
                warto poprosić lekarza rodzinnego o skierowanie na badania
              </FormLabel>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <UserExamPrev />
        </Grid>
      </Grid>
    </content>
  );
};
UserExam2.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserExam2;
