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
        defaultValue="brak"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="wegetariańska"
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          label="wegetariańska"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="wegańska"
          label="wegańska"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="wysokobiałkowa"
          label="wysokobiałkowa"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="bezglutenowa"
          label="bezglutenowa"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="niskosodowa"
          label="niskosodowa"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="śródziemnomorska"
          label="śródziemnomorska"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="bezlaktozowa"
          label="bezlaktozowa"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="inna"
          label="inna"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
              }}
            />
          }
          value="brak"
          label="brak"
        />
      </RadioGroup>
    </FormControl>
  );
}
