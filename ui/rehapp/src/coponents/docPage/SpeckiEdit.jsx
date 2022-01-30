/* eslint-disable react/function-component-definition */
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="główna specjalizacja" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="neurologia" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="choroby płuc" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="położnictwo i ginekologia" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="choroby zakaźne" />
          </ListItemButton>
          <ListItemButton
            sx={{
              pl: 4,
              "&.Mui-checked": { color: "rgba(253, 105, 139, 0.85)" },
            }}
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="pediatria" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemText primary="kardiologia" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            <ListItemText primary="psychiatria" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <ListItemText primary="choroby wewnętrzne" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
