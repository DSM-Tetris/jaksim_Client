import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0%{
    background-position-x: 0px;
  }
  100%{
    background-position-x: 1000px;
  }
`;

const wave2 = keyframes`
  0%{
    background-position-x: 400px;
  }
  100%{
    background-position-x: 1400px;
  }
`;


export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 200vh;
`

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  margin-top: 100px;
  /* background-color: wheat; */
`

export const TodayTag = styled.div`
  font-size: 50px;
`

export const TagText = styled.span`
  font-size: 50px;
  color: #4A7A62;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  :hover{
    opacity: 0.5;
  }
`

export const TopInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 80%;
  /* background-color: wheat; */
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px;
  width: 48%;
  height: 100%;
  box-sizing: border-box;
  /* background-color: darkgreen; */
`

export const Write = styled.span`
  font-size: 130px;
  
`

export const Green = styled.span`
  font-size: 130px;
  color: #4A7A62;
`

export const BatteryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 100%;
  box-sizing: border-box;
  /* background-color: firebrick; */
`

export const BatteryOutter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.7);
`

export const BatteryInner = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: white;
  clip-path: circle();
`

export const Test = styled.div`
  position: absolute;
  left: 0;
  top: ${props => props.percent}%;
  width: 100%;
  height: 700px;
  background-size: 500px;
  background-position-x: 0;
  background-image: url("/src/assets/images/asdf.png"); 
  transition: all 0.8s ease-in-out;
  animation: ${wave} 20s linear infinite;
`

export const Tet = styled.img`
  position: absolute;
  left: 0;
  top: ${props => props.percent}%;
  width: 100%;
  height: 700px;
  background-size: 500px;
  background-position-x: 400px;
  background-image: url("/src/assets/images/asdf.png"); 
  animation: ${wave2} 18s linear infinite;
  transition: all 0.8s ease-in-out;
  opacity: 0.6;
  z-index: 100;
`

export const VPer = styled.span`
  position: absolute;
  /* top: 45%; */
  top: 45%;
  left: 45%;
  font-size: 30px;
  color: black;
  z-index: 400;
`

export const PostBtn = styled.button`
  width: 35%;
  height: 70px;
  background-color: #DEFADA;
  border: none;
  outline: none;
  font-size: 35px;
  font-family: 'paybooc-Medium';
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #92d989;
    color: white;
  }
`

