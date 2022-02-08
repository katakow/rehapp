/* eslint-disable react/prop-types */

import { Grid, TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import EditPatientSave from "../../coponents/docPage/buttons/EditPatientSave";

const DocPatients = function ({ title }) {
  return (
    <content>
      <NavBarekDoc />
      <Grid container direction="column" spacing="70px" justifyContent="center">
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="50px"
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid item>
              <FormLabel
                sx={{ fontSize: "30px", color: "rgba(106, 144, 100, 0.8);" }}
              >
                JAN KOWALSKI
              </FormLabel>{" "}
              <Grid container direction="column" spacing="50px">
                <Grid item>
                  <FormLabel>PESEL</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>waga [kg]</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>wzrost [cm]</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>alergie</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>odbyte szczepienia</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>spożywana dieta</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>choroby współistniejące</FormLabel>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing="50px">
                <Grid item>
                  <FormLabel>pozytywny wynik testu na COVID-19</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>objawy podczas COVID-19</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>przebieg COVID</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>leki zażywane podczas COVID-19</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>szczepienie na COVID-19</FormLabel>
                </Grid>
                <Grid item>
                  <FormLabel>
                    nazwa szczepionki, którym pacjent się szczepił
                  </FormLabel>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                spacing="40px"
                alignContent="center"
              >
                <Grid item>
                  <FormLabel sx={{ fontSize: "30px", color: "black" }}>
                    ZALECONO:
                  </FormLabel>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing="200px">
                    <Grid item>
                      <FormLabel>dieta:</FormLabel>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label=""
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing="130px">
                    <Grid item>
                      <FormLabel>suplementacja:</FormLabel>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label=""
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing="95px">
                    <Grid item>
                      <FormLabel>aktywność fizyczna:</FormLabel>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label=""
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing="30px">
                    <Grid item>
                      <FormLabel>konsultacje ze specjalistami:</FormLabel>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label=""
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing="65px">
                    <Grid item>
                      <FormLabel>skierowania na badania:</FormLabel>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label=""
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <EditPatientSave />
        </Grid>
      </Grid>
    </content>
  );
};
DocPatients.defaultProps = {
  title: "Edytuj zalecenia / badania",
};
export default DocPatients;
