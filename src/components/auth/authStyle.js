import styled from 'styled-components';

export const AuthContainer = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

export const AuthTitleContainer = styled.div`

`

export const FirstChar = styled.span`
font-family: "paybooc-Bold";
font-size: 3.125rem;
`

export const SecondChar = styled.span`
font-family: "paybooc-Medium";
font-size: 3.125rem;
`

export const AuthForm = styled.form`
  width: 70%;
  height: 5rem;
  margin-bottom: 50px;
`

export const AuthSubmit = styled.button`
  border: none;
  outline: none;
  width: 70%;
  height: 5rem;
  background: none;
  color: #4A7A62;
  font-size: 1.875rem;
  font-family: "paybooc-Bold";
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  :hover{
    background: #dbffed;
  }
`