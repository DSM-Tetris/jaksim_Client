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
  transition: all ease-in-out;
  
  ::before{
    content: "";
    position: absolute;
    width: 700px;
    height: 150px;
    left: -600%;
    top: -100%;
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
    left: 100%;
    top: -100%;
    opacity: 0.3;
  }
`