import {
  Drawer,
  List,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";


export default function Navbar({ children }: any) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", bgcolor: "white", minHeight: "100vh" }}>
      <Drawer
        anchor="left"
        open={true}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: theme.palette.primary.main,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
      >
        <List>
          {children}
        </List>
      </Drawer>
    </Box>
  )
}
