/* eslint-disable react/function-component-definition */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function FolderList() {
  const patients = ["Jan", "Kasia", "Maria", "Przemysław"];

  const navigate = useNavigate();
  return (
    <List sx={{ maxWidth: 500, fontSize: "60px" }}>
      {patients.map((d) => (
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => {
                navigate("/doc/patientsEdit");
              }}
            >
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary={d} secondary="9812342332" />
        </ListItem>
      ))}
    </List>
  );
}
