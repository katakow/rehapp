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
          value="mężcfdzyzna"
          label="mężczyzna"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="mężczysxzna"
          label="mężczyzna"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="mężczwyzna"
          label="mężczyzna"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="mężczssyzna"
          label="mężczyzna"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="aa"
          label="mężczyzna"
        />
        <FormControlLabel
          value="la"
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          label="la"
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
  );
}
