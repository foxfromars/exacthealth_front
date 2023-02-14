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
  const [values, setValues] = useState({});
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }
  return (
    <AccountForm>
      <Text>Sign Up to acess our services</Text>
      <TextField
        label="Name"
        name="name"
        value={values.name || ""}
      />
      <TextField
        label="Email"
        name="email"
      />
      <TextField
        label="Username"
        name="username"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
      />
      <Button variant="contained">Sign Up</Button>
    </AccountForm>
  );
}
