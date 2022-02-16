/* eslint-disable func-names */
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = function () {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="error">Coś poszło nie tak, wróć do strony głównej. </h1>
      <Button onClick={navigate("/main")} />
    </div>
  );
};

export default ErrorPage;
