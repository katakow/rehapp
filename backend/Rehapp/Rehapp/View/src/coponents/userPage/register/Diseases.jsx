/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function CheckboxLabels() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [diseases, setDiseases] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://localhost:7080/Diseases")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDiseases(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <FormLabel component="legend">choroby współistniejące</FormLabel>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <FormGroup>
            {diseases.map((d) => (
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
                label={d.label}
              />
            ))}
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  );
}
