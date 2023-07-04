import {
  Box,
  Modal,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import medicineService from "../../services/medicine.service";
import useAlert from "../../hooks/UseAlert";

interface Props {
  isOpen: any;
  setOpen: any;
}

interface Values {
  name?: string;
  type?: string;
  description?: string;
}

export default function CreateMedicineModal({
  isOpen,
  setOpen,
}: Props) {

  const [values, setValues] = useState<Values>({});
  const [alert, setAlert] = useAlert();
  const navigate = useNavigate();

  function handleValuesChanges(e: any) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    const token = localStorage.getItem("token");
    if(token) {
      await medicineService.post(token, values, setAlert);         
      setOpen(false);
      navigate(0);
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => setOpen(false)}
      sx={{
        display: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "90%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" textAlign="center">Create New Medicine</Typography>
        <Box
          sx={{
            display: "inline-grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr 2fr",
            width: "100%",
            boxSizing: "border-box",
            padding: "40px",
          }}
        >
          <Box
            sx={{
              display: "inline-grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "10px",
            }}
          >
            <TextField
              name="name"
              onChange={handleValuesChanges}
              value={values?.name ? values.name : ""}
              label="Name"
            />
            <TextField
              name="type"
              onChange={handleValuesChanges}
              value={values?.type ? values.type : ""}
              label="Type"
            />
          </Box>
          <TextField
            name="description"
            onChange={handleValuesChanges}
            value={values?.description ? values.description : ""}
            label="Description"
            multiline
            rows={5}
          />
        </Box>
        <Box
          sx={{
            display: "inline-grid",
            gridTemplateColumns: "1fr 1fr",
            width: "60%",
            boxSizing: "border-box",
            columnGap: "2rem",
          }}
        >
          <Button
            color="error"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
