import axios from "axios";
import {
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useState } from "react";

import AccountForm from "../../AccountForm";
import {
  Text,
} from "./styles";

export default function Signup() {

  const [values, setValues] = useState<any>({});
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;
    await axios({
      method: 'post',
      url: `${SERVER_URL}/user`,
      data: values,
    })
      .then(e => {
        if (e.data.ok === false) {
          setError(e.data.response);
          console.log(e.data.ok);
        }
        else {
          setSuccess(true);
        }
      })
      .catch(e => {
        setError(e.data.response);
        console.log(error)
      })
  }

  function SignupForm() {
    return (
      <>
        <Text>Sign Up to acess our services</Text>
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
        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        {error === "" ? null : <Alert severity="error" onClose={() => setError("")}>{error}</Alert>}
      </>
    );
  }

  function SuccessMessage() {
    return (
      <>
        <Text>
          Your account has been successfully created
        </Text>
        <a href="/">Go to login page</a>
      </>
    );
  }

  return (
    <AccountForm>
      {success == true ? SuccessMessage() : SignupForm()}
    </AccountForm>
  )
}
