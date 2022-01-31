/* eslint-disable react/prop-types */
import { Container, Grid } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";

const UserExam = function ({ title }) {
  return (
    <body>
      <NavBarek />
      <h1 className="main" align="center">
        {title}
      </h1>
      <Container>
        <Grid container direction="row" spacing="60px">
          <Grid item />
          <Grid item />
          <Grid item />
          <Grid item />
        </Grid>
      </Container>
    </body>
  );
};
UserExam.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserExam;
