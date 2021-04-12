import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 200vh;
`

export const Box = styled.div`
  z-index: 100;
  width: 100px;
  height: 100px;
  background: red;
`

export const Logout = styled.div`
  position: absolute;
  left: 90%;
  top: 20px;
  width: 120px;
  height: 40px;
  padding-top: 10px;
  font-size: 1.5625rem;
  text-align: center;
  font-family: "paybooc-Medium";
  overflow: hidden;
  cursor: pointer;
`