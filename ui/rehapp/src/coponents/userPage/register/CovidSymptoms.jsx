/* eslint-disable react/function-component-definition */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Container, Grid } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
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
              <FormControlLabel
                value="bezobjawowo"
                label="bezobjawowo"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
                value="lekko"
                label="lekko"
              />
              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
                value="średno"
                label="średno"
              />
              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                    }}
                  />
                }
                value="ciężko"
                label="ciężko"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
