import styled from 'styled-components';

export const LoginImg = styled.img`
  width: 780px;
  height: 550px;
`

export const Inner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 730px;
  height: 550px;
`

export const Input = styled.input`
  width: 80%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 30px;
  font-family: "paybooc-Bold";
  color: #4A7A62;
  background: none;
  ::placeholder{
    color: #4A7A62;
    opacity: 0.5;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -100px;
  width: 70%;
  height: 80px;
`

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 20px;
  color: #4A7A62;;
  font-family: "paybooc-Bold";
  overflow: hidden;

  ::before{
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    left: -150%;
    background: #62fc68;
    transition: all 0.45s;
    opacity: 0.3;
  }

  :hover{
    font-family: "paybooc-Bold";
  }

  :hover::before{
    content: "";
    position: absolute;
    width: 700px;
    height: 150px;
    opacity: 0.3;
  }
`