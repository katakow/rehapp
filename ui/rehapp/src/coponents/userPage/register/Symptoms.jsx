/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import { Container, Grid } from "@mui/material";

export default function CheckboxLabels() {
  const symptoms = ["brak smaku", "brak węchu", "duszności", "zmęczenie"];
  return (
    <Container>
      <FormLabel component="legend">jakie miałaś / miałeś objawy?</FormLabel>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <FormGroup>
            {symptoms.map((d) => (
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
