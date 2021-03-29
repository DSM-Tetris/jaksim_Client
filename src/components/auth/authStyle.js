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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 400px;
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

export const AuthInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  background: rgba(255,255,255,0.4);
  border-radius: 30px;
`

export const AuthIcon = styled.img`
  width: 30px;
  height: 30px;
`