/* eslint-disable react/function-component-definition */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, Container } from "@mui/material";

export default function RadioButtonsGroup() {
  const covidTest = ["tak", "nie"];
  return (
    <Container>
      <FormLabel component="legend">
        Czy kiedykolwiek miałeś pozytywny wynik testu na COVID-19?
      </FormLabel>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="brak"
            name="radio-buttons-group"
          >
            {covidTest.map((d) => (
              <FormControlLabel
                value={d}
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
                label={d}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Container>
  );
}
