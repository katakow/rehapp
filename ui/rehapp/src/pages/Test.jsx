/* eslint-disable no-unused-vars */
import { Button, TextField } from "@mui/material";

import { useState } from "react";
import addDiseases from "../apiService";

const Test = function () {
  const [diseases, setDiseases] = useState([]);

  const getDiseases = () => {
    fetch("http://localhost:5080/Diseases", {
      headers: { accept: "*/*", "Content-Type": "application/json" },
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDiseases(data);
      });
  };

  return (
    <div>
      <h1 align="center">Hello</h1>
      <Button onClick={getDiseases}> Get from DB</Button>
      {diseases.map((d) => (
        <h3 key={d.id}>{d.label}</h3>
      ))}
      <Button onClick={addDiseases}> Save to DB </Button>
      <TextField type="text" name="nazwa choroby" />
    </div>
  );
};

export default Test;
