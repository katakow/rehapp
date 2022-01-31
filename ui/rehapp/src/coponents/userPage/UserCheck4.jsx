/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels() {
  return (
    <FormGroup>
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
        label="wysypka"
      />
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
        label="ból gardła"
      />
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
        label="zaczerwienione oczy"
      />
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
        label="wysokie ciśnienie"
      />
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
        label="duszności wysiłkowe"
      />
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
        label="brak"
      />
    </FormGroup>
  );
}
