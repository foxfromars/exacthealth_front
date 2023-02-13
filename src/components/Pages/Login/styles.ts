import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`
export const LoginContainer = styled.div`
  background-color: #fff; 
  width: 65%;
  height: 95%;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); 
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  width: 65%;
  height: 80%;
  padding-top: 30px;
  padding-bottom: 20px;

  border-bottom: 0.3px solid #00000022;
  border-left: 0.2px solid #00000022;
  border-right: 0.2px solid #00000022;

  button {
    width: 200px;
    height: 40px;
  }

  h1 {
    width: 70%;
    font-size: 1.4rem;
    text-align: center;
    color: #00000099;
    font-family: 'Roboto';
  }

  a {
    color: blue;
    cursor: pointer;
  }

  .textfield {
    height: 50px;
    width: 320px;
  }
`

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 100%;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  font-size: 0.8rem;
`

export const BottomLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
