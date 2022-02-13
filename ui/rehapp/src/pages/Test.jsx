/* eslint-disable no-unused-vars */
import { Button, TextField } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";

const Test = function () {
  const [diseases, setDiseases] = useState([]);
  const getDiseases = () => {
    Axios.get("https://localhost:7080/Diseases").then((response) => {
      setDiseases(response.data);
      console.log(response);
    });
  };

  const addDiseases = () => {
    Axios.post("https://localhost:7080/Diseases", {
      label: "nowotwór",
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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

// console.log("hello");
// fetch("https://localhost:7080/Diseases", {
//   method: "GET",
// })
//   .then((res) => {
//     res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR"));
