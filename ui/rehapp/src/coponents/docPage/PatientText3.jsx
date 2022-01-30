import { Container, Grid, TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

const PatientEditText = function () {
  return (
    <div className="body">
      <Container maxWidth="1200px">
        <Grid container direction="column" spacing="40px">
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
      </Container>
    </div>
  );
};

export default PatientEditText;
