import { Container, LoginContainer, LoginForm } from "./styles";
import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <Container>
      <LoginContainer>
        <LoginForm>
          <TextField variant="outlined" label="Username" required />
          <TextField variant="outlined" label="Password" required />
          <Button variant="contained">LOGIN</Button>
        </LoginForm>
      </LoginContainer>
    </Container>
  );
}
