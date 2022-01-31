/* eslint-disable react/function-component-definition */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function FolderList() {
  const navigate = useNavigate();
  return (
    <List sx={{ width: "100%", maxWidth: 500, fontSize: "60px" }}>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              navigate("/doc/patients/edit");
            }}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Jan Kowalski" secondary="9812342332" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              navigate("/doc/patients/edit");
            }}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Malina Dołek" secondary="71201412345" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              navigate("/doc/patients/edit");
            }}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Aleksandra Źdźbło" secondary="20201498765" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              navigate("/doc/patients/edit");
            }}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Witold Słaby" secondary="78654376583" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              navigate("/doc/patients/edit");
            }}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Ireneusz Mąka" secondary="98071234567" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              navigate("/doc/patients/edit");
            }}
          >
            <EditIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Urszula Koń" secondary="56431293845" />
      </ListItem>
    </List>
  );
}
