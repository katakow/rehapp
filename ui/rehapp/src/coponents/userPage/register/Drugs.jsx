/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

export default function CheckboxLabels() {
  const drugs = [
    "przeciwgorączkowe",
    "przeciwzapalne",
    "na kaszel",
    "na grypę",
  ];
  return (
    <Container>
      <FormLabel component="legend">jakie leki zażywałaś /zażywałeś?</FormLabel>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <FormGroup>
            {drugs.map((d) => (
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
