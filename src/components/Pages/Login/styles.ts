import styled from "styled-components";

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
