import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type Props = {
  text: string;
  icon?: any;
}

export default function NavbarItem({ text, icon }: Props) {
  return (
    <ListItem
      disablePadding
      sx={{ color: "#eee" }}
    >
      <ListItemButton sx={{
        "&:hover": {
          backgroundColor: "#aaaaaa44",
        }
      }}>
        <ListItemIcon>{icon ? icon : null}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
