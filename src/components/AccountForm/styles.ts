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
  width: 80%;
  height: 95%;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); 
  display: grid;
  grid-template-columns: 40% 60%;
  @media(max-width: 750px) {
    width: 100%;
    height: 100%;
    grid-template-columns: 0% 100%;
  }
`

export const LoginPainel = styled.div`
  background-color: blue;
  height: 100%;
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  height: 80%;
  padding-top: 30px;
  padding-bottom: 20px;

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
    font-weight: 400;
    margin: 0;
  }

  a {
    color: blue;
    cursor: pointer;
  }

  .textfield {
    height: 50px;
    width: 320px;
    margin: 12px;
  }

  @media(max-width: 500px) {
    justify-content: start;

    .textfield {
      margin: 5px;
      width: 80%;
    }
    
    h1 {
      margin-top: 35px;
    }

    button {
      margin-bottom: 0px;
      width: 75%;
    }
  }
`

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 0;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 50%;
  min-width: 220px;
  font-size: 0.8rem;
  color: #00000099;
  margin-bottom: 10px;

  @media(max-width: 900px){
    justify-content: center;
  }
`

export const BottomLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`