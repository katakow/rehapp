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
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </Container>
  );
}
