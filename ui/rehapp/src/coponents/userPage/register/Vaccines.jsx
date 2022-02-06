/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

export default function CheckboxLabels() {
  const vaccines = ["grypa", "tężec", "krztusiec", "różyczka"];
  return (
    <Container>
      <FormLabel component="legend">odbyte szczepienia</FormLabel>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FormGroup>
          {vaccines.map((d) => (
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
    </Container>
  );
}
