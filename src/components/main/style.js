import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  position: fixed;
  float: left;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/images/background.png");
  z-index: -100;
`

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 120vh;
`

export const Box = styled.div`
  z-index: 100;
  width: 100px;
  height: 100px;
  background: red;
`