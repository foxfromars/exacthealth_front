import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FormInputs,
  CheckboxContainer,
  BottomLogin,
} from "./styles";
import { Button, Checkbox, TextField } from "@mui/material";
import AccountForm from "../../AccountForm";

type Values = {
  username?: string;
  password?: string;
};

export default function Login() {
  const [values, setValues] = useState<Values>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  function handleChange(e: any) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  async function handleSubmit() {
    const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;

    await axios({
      method: "post",
      url: `${SERVER_URL}/token`,
      data: values,
    })
      .then(e => {
        localStorage.setItem("token", e.data.response);
        navigate("/home");
      })
      .catch(e => {
        setError(e.message);
        setValues({});
      })
  }

  return (
    <AccountForm>
      <h1>Log into your account</h1>
      <FormInputs>
        <TextField
          variant="outlined"
          label="Username"
          name="username"
          className="textfield"
          onChange={handleChange}
          value={values.username || ""}
          required
        />
        <TextField
          variant="outlined"
          label="Password"
          name="password"
          className="textfield"
          type="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <CheckboxContainer>
          <Checkbox />
          <p>Remember this device</p>
        </CheckboxContainer>
        <Button variant="contained" onClick={handleSubmit}>LOGIN</Button>
      </FormInputs>
      <BottomLogin>
        <span>Need a account? <a href="/signup">Sign up here</a></span>
        <a href="/404">Forget your password?</a>
      </BottomLogin>
    </AccountForm>
  );
}
