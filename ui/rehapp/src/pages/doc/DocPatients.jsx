/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import ListOfPatients from "../../coponents/docPage/ListOfPatients";

const DocPatients = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <Grid
        container
        direction="column"
        spacing="100px"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <ListOfPatients />
        </Grid>
      </Grid>
    </div>
  );
};
DocPatients.defaultProps = {
  title: "Wybierz pacjenta, którego zalecenia / badania chcesz edytować ",
};
export default DocPatients;
