/* eslint-disable no-unused-vars */
import { Button, TextField } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import addDiseases from "../apiService";

const Test = function () {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [diseases, setDiseases] = useState([]);
  // const config = {
  //   mode: "cors",
  //   headers: {
  //     accept: "*/*",
  //     "Content-Type": "application/json",
  //   },
  // };

  const getDiseases = () => {
    Axios.get("https://localhost:7080/Diseases").then((response) => {
      setDiseases(response.data);
      console.log(response);
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
