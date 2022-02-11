/* eslint-disable react/function-component-definition */
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          GŁÓWNA SPECJALIZACJA
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick} />
      <List component="div" disablePadding>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="NEUROLOGIA" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="CHOROBY PŁUC" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="POŁOŻNICTWO I GINEKOLOGIA" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="CHOROBY ZAKAŹNE" />
        </ListItemButton>
        <ListItemButton
          sx={{
            pl: 4,
          }}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="PEDIATRIA" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText primary="KARDIOLOGIA" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemText primary="PSYCHIATRIA" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemText primary="CHOROBY WEWNĘTRZNE" />
        </ListItemButton>
      </List>
    </List>
  );
}
