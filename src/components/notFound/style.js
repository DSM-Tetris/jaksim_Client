import styled, { keyframes } from 'styled-components';

const rainbow = keyframes`
  0%{
    background-position:0% 82%
  }
  50%{
    background-position:100% 19%
  }
  100%{
    background-position:0% 82%
  }
`

export const Rainbow = styled.div`
  width: 100%;
  height: 100vh;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;
  animation: ${rainbow} 18s ease infinite;
  opacity: 0.4;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Text = styled.span`
  z-index: 10;
  font-size: 6.25rem;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1000% 1000%;
  animation: ${rainbow} 18s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`