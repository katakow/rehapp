/* eslint-disable react/function-component-definition */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="nie"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="bezobjawowy"
          label="bezobjawowy"
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
          value="lekki"
          label="lekki"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="średni"
          label="średni"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="ciężki"
          label="ciężki"
        />
      </RadioGroup>
    </FormControl>
  );
}
