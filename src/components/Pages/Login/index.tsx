import {
  FormInputs,
  CheckboxContainer,
  BottomLogin,
} from "./styles";
import { Button, Checkbox, TextField } from "@mui/material";
import AccountForm from "../../AccountForm";

export default function Login() {
  return (
    <AccountForm>
      <h1>Log into your account</h1>
      <FormInputs>
        <TextField
          variant="outlined"
          label="Username"
          className="textfield"
          required
        />
        <TextField
          variant="outlined"
          label="Password"
          className="textfield"
          type="password"
          required
        />
        <CheckboxContainer>
          <Checkbox />
          <p>Remember this device</p>
        </CheckboxContainer>
        <Button variant="contained">LOGIN</Button>
      </FormInputs>
      <BottomLogin>
        <span>Need a account? <a href="/404">Sign up here</a></span>
        <a href="/404">Forget your password?</a>
      </BottomLogin>
    </AccountForm>
  );
}
