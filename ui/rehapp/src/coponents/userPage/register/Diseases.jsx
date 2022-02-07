/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect } from "react";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container, Grid } from "@mui/material";

export default function CheckboxLabels() {
  // const diseases = ["cukrzyca", "chorby tarczycy", "nadciśnienie", "gówno"];
  useEffect(() => {
    const fetchDiseases = async () => {
      const res = await fetch("http://localhost:5000/diseases");
      const diseases = await res.;

      console.log(diseases);
    };
    fetchDiseases();
  }, []);

  return (
    <Container>
      <FormLabel component="legend">choroby współistniejące</FormLabel>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <FormGroup>
            {diseases.map((d) => (
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "rgba(253, 105, 139, 0.85)",
                      },
                    }}
                  />
                }
                label={d}
              />
            ))}
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  );
}
