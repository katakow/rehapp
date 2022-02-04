/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container, Grid } from "@mui/material";

export default function CheckboxLabels() {
  return (
    <Container>
      <FormLabel component="legend">choroby współistniejące</FormLabel>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="bodyLogin2"
      >
        <Grid item>
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
              label="cukrzyca"
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
              label="choroby tarczycy"
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
              label="osteoporoza"
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
              label="nadciśnienie"
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
              label="reumatyzm"
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
              label="migrena"
            />
          </FormGroup>
        </Grid>
        <Grid item>
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
              label="nowotwór"
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
              label="zapalenie jelit"
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
              label="wrzody"
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
              label="choroby na tle psychicznym"
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
              label="inne"
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
        </Grid>
      </Grid>
    </Container>
  );
}
