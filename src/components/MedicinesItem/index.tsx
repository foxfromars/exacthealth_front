import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type Props = {
  text: string;
  type: string;
  icon?: any;
  description?: string;
  instructions?: string;
  alarms?: string;
}

export default function MedicinesItem({
  text,
  icon,
  type,
}: Props) {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemText primary={text} secondary={type}/>
        {icon ? <ListItemIcon>icon</ListItemIcon> : null}
      </ListItemButton>
    </ListItem>
  );
}
