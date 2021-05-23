import styled from 'styled-components';

export const LoginImg = styled.img`

`

export const Inner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 730px;
  height: 670px;
`

export const InputWrapperWithCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  /* background: #0123a3; */
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 3.75rem;
  background: rgba(255,255,255,0.4);
  border-radius: 30px;
`

export const Input = styled.input`
  width: 55%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  font-family: "paybooc-Bold";
  color: #4A7A62;
  background: none;
  ::placeholder{
    color: #4A7A62;
    opacity: 0.5;
  }
`

export const DoubleCheck = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
  border: 3px solid #4A7A62;
  outline: none;
  background: #CFFDD4;
  margin-right: -13px;
  color: #4A7A62;
  border-radius: 30px;
  opacity: 0.7;
  font-size: 15px;
  font-family: "paybooc-Bold";
  cursor: pointer;
`

export const InvisibleBox = styled.div`
  display: flex;
  width: 120px;
  height: 100%;
  background: #CFFDD4;
  border-radius: 30px;
  margin-right: -13px;
  opacity: 0;
`