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
        label="kaszel"
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
        label="katar"
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
        label="brak smaku"
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
        label="brak węchu"
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
        label="przymglenie"
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
        label="problemy z oddychaniem"
      />
    </FormGroup>
  );
}
