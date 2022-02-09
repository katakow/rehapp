/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FolderList() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [patients, setPatients] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://localhost:7080/Patients")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPatients(result);
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
    <List sx={{ maxWidth: 500, fontSize: "60px" }}>
      {patients.map((d) => (
        <ListItem
          secondaryAction={
            <IconButton
              edge="start"
              aria-label="edit"
              onClick={() => {
                navigate("/doc/patientsEdit");
              }}
            >
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary={d.surname} secondary={d.name} />
        </ListItem>
      ))}
    </List>
  );
}
