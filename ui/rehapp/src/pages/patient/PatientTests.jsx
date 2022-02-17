/* eslint-disable react/prop-types */
import { Grid, FormLabel } from "@mui/material";
import NavBarek from "../../coponents/userPage/NavBarek";

const UserExam2 = function ({ title }) {
  const userId = localStorage.getItem("userId");
  const by3 = (num) => num % 3 === 0;
  const by5 = (num) => num % 5 === 0;
  const by2 = (num) => num % 2 === 0;

  const setDoctors = () => {
    if (by3(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong>Kardiolog, Pulmunolog</strong>
        </FormLabel>
      );

    if (by2(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> Chirurg Ogólny, Internista</strong>
        </FormLabel>
      );
    if (by5(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> Reumatolog, Kardiolog</strong>
        </FormLabel>
      );
    return (
      <FormLabel component="legend" sx={{ fontSize: "18px" }}>
        <strong> Pulmunolog, Chirurg Ogólny</strong>
      </FormLabel>
    );
  };
  const setExams = () => {
    if (by3(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> Morfologia, EKG, USG serca, RTG płuc </strong>
        </FormLabel>
      );

    if (by2(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong> Morfologia, RTG płuc, OB</strong>
        </FormLabel>
      );
    if (by5(userId))
      return (
        <FormLabel component="legend" sx={{ fontSize: "18px" }}>
          <strong>Morfologia, CRP, OB, </strong>
        </FormLabel>
      );
    return (
      <FormLabel component="legend" sx={{ fontSize: "18px" }}>
        <strong>Morfologia, EKG, RTG płuc</strong>
      </FormLabel>
    );
  };

  return (
    <div>
      <NavBarek />
      <Grid container direction="column" spacing="100px">
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing="100px">
            <Grid item>
              <FormLabel component="legend" sx={{ fontSize: "20px" }}>
                zachęcamy do udania się do następujących specjalistów w celu
                sprawdzenia funkcjonowania organizmu specjalistów:
              </FormLabel>
            </Grid>
            <Grid item alignSelf="center">
              {setDoctors()}
            </Grid>
            <Grid item>
              <FormLabel component="legend" sx={{ fontSize: "20px" }}>
                warto poprosić lekarza rodzinnego o skierowanie na takie badania
                jak:
              </FormLabel>
            </Grid>
            <Grid item alignSelf="center">
              {setExams()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
UserExam2.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserExam2;
