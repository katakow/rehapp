/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container } from "@mui/material";

export default function CheckboxLabels() {
  return (
    <Container>
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
          label="Label"
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
          label="Disabled"
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
          label="Label"
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
          label="Disabled"
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
          label="Label"
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
          label="Disabled"
        />
      </FormGroup>
    </Container>
  );
}
