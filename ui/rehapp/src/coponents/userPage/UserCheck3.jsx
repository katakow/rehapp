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
        label="senność"
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
        label="gorączka"
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
        label="zaburzenia pamięci"
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
        label="biegunka"
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
        label="krew w moczu"
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
        label="krew w kale"
      />
    </FormGroup>
  );
}
