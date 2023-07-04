import { useEffect, useState } from "react";
import {
  Box,
  List,
  Typography,
} from "@mui/material";

import { useTheme } from "@mui/material";
import useAlert from "../../../hooks/UseAlert";

import MedicinesItem from "../../MedicinesItem";
import medicineService from "../../../services/medicine.service";
import CreateMedicineModal from "../../CreateMedicineModal/";
import FloatAddButton from "../../FloatAddButton/";

export default function Medicines() {
  const theme = useTheme();
  const [alert, setAlert] = useAlert();

  const [items, setItems] = useState<Array<any>>([]);
  const [createModal, setCreateModal] = useState<boolean>(false);


  useEffect(() => {
    async function request() {
      const token = localStorage.getItem("token");
      if (token) {
        const result = await medicineService.getAll(token, setAlert);
        if (result) {
          setItems(result);
        }
      }
    }
    request();
  }, []);

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
        {!items ? null : items.map((e: any) => {
          return (
            <MedicinesItem text={e.name} type={e.type} />
          );
        })}
      </List>
      <CreateMedicineModal
        isOpen={createModal}
        setOpen={setCreateModal}
      />
      <FloatAddButton
        onClick={() => setCreateModal(true)}
        x={20}
        y={20}
      />
    </Box>
  );
}
