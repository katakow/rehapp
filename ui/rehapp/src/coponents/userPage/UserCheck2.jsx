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
        label="zmęczenie"
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
        label="brak skupienia"
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
        label="szybkie bicie serca"
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
        label="ból w klatce piersiowej"
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
        label="ból kości / stawów"
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
        label="ból głowy"
      />
    </FormGroup>
  );
}
