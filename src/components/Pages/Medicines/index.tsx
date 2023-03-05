import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  List,
  Typography,
} from "@mui/material";

import { useTheme } from "@mui/material";

import MedicinesItem from "../../MedicinesItem";

export default function Medicines() {
  const [items, setItems] = useState<any>([]);
  const theme = useTheme();


  useEffect(() => {
    const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;
    async function request() {
      await axios({
        method: "get",
        url: `${SERVER_URL}/medicine`,
      })
        .then((e) => {
          setItems(e.data.response);
        })
        .catch((e) => {
          console.log(e);
        })
    }
    request();
  }, [])

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: theme.palette.bg,
    }}>
      <Typography variant="sectionTitle">Medicines</Typography>
      <List sx={{
        backgroundColor: theme.palette.surface,
        minHeight: "420px",
        margin: "30px",
        borderRadius: "10px",
      }}>
      {!items ? null : items.map((e:any) => {
          return (
            <MedicinesItem text={e.name} type={e.type}/>
              );
          })}
      </List>
    </Box>
  );
}
