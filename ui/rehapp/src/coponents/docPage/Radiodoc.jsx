/* eslint-disable react/function-component-definition */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup() {
  return (
    <div className="radiodoc">
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="inna"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="kobieta"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                }}
              />
            }
            label="kobieta"
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
          />
          <FormControlLabel
            value="inna"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
                }}
              />
            }
            label="inna"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
