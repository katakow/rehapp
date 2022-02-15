/* eslint-disable react/function-component-definition */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup() {
  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="inna"
          name="radio-buttons-group"
        >
          <FormControlLabel
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                }}
              />
            }
            value="kobieta"
            label="kobieta"
            name="kobieta"
          />
          <FormControlLabel
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                }}
              />
            }
            value="mężczyzna"
            label="mężczyzna"
            name="mężczyzna"
          />
          <FormControlLabel
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                }}
              />
            }
            value="inna"
            label="inna"
            name="inna"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
