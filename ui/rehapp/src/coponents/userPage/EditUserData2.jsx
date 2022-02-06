/* eslint-disable react/jsx-no-undef */
import { Grid, TextField } from "@mui/material";
import * as React from "react";

const EditUserData2 = function () {
  return (
    <Grid container direction="column" spacing="60px" width="300px">
      <Grid item>
        <TextField
          id="standard-basic"
          label="choroby współistniejące"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="odbyte szczepienia"
          variant="standard"
          fullWidth
        />
      </Grid>

      <Grid item>
        <TextField
          id="standard-basic"
          label="alergie"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          id="standard-basic"
          label="spożywana dieta"
          variant="standard"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default EditUserData2;
