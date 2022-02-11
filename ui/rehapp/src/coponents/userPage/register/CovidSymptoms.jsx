/* eslint-disable react/function-component-definition */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  const covidSymptoms = ["bezobjawowo", "lekko", "średnio", "ciężko"];
  return (
    <Container>
      <FormLabel component="legend" maxWidth>
        jak przeszłaś / przeszedłeś COVID-19?
      </FormLabel>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="bezobjawowo"
              name="radio-buttons-group"
            >
              {covidSymptoms.map((d) => (
                <FormControlLabel
                  value={d}
                  label={d}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                      }}
                    />
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
