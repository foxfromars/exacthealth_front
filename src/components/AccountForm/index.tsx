import {
  Container,
  LoginContainer,
  LoginForm,
  LoginPainel
} from "./styles";

export default function AccountForm(props: any) {
  return (
    <Container>
      <LoginContainer>
        <LoginPainel />
        <LoginForm>
          { if(props.children) return ...props.children}
        </LoginForm>
      </LoginContainer>
    </Container>
  );
}