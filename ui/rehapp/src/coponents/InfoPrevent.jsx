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
      sx={{ width: "360px", bgcolor: "rgba(106, 144, 100, 0.37)" }}
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          ZAPOBIEGANIE
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
          <ListItemText primary="CZĘSTE I DOKŁADNE MYCIE RĄK" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="UTRZYMYWANIE DYSTANSU" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="ZAKRYWANIE UST I NOSA MASECZKĄ" />
        </ListItemButton>
        <ListItemButton
          sx={{ pl: 4 }}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="WIETRZENIE POMIESZCZEŃ" />
        </ListItemButton>
        <ListItemButton
          sx={{
            pl: 4,
          }}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="SZCZEPIENIE SIĘ" />
        </ListItemButton>
      </List>
    </List>
  );
}
