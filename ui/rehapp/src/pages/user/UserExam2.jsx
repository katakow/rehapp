/* eslint-disable react/prop-types */
import { Container, Grid, FormLabel } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";

const UserExam2 = function ({ title }) {
  return (
    <body>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container className="myDiv">
        <Grid container direction="column" spacing="80px">
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
      </Container>
    </body>
  );
};
UserExam2.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserExam2;
