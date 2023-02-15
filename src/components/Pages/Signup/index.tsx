import axios from "axios";
import {
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import AccountForm from "../../AccountForm";
import {
  Text,
} from "./styles";

export default function Signup() {
  const [values, setValues] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = () => {
    const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;
    axios.post(`${SERVER_URL}/user`,)
  }

  return (
    <AccountForm>
      <Text>Sign Up to acess our services</Text>
      <TextField
        label="Name"
        name="name"
        onChange={handleChange}
        value={values.name || ""}
      />
      <TextField
        label="Email"
        name="email"
        onChange={handleChange}
        value={values.email || ""}
      />
      <TextField
        label="Username"
        name="username"
        onChange={handleChange}
        value={values.username || ""}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password || ""}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </AccountForm>
  );
}
