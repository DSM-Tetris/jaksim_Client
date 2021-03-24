import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  position: fixed;
  min-width: 100%;
  height: 100vh;
  background-image: url("/src/assets/images/background.png");
  background-repeat: no-repeat;
  z-index: -100;
  object-fit: cover;
`

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
  font-size: 50px;
`

export const SecondChar = styled.span`
  font-family: "paybooc-Medium";
  font-size: 50px;
`