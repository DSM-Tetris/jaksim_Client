import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    
  width: 100%;
  height: 100vh;
  background: none;
`

export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  height: 85%;
  padding: 20px;
  border: 2px solid rgba(70,70,70,0.2);
  border-radius: 10px;
  background:#ffffff;
  overflow-y: scroll;

  ::-webkit-scrollbar {
      width: 5px;
  }
  ::-webkit-scrollbar-track{
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(97, 97, 97,0.4);
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`

export const TitleText = styled.div`
  font-size: 3.5vmin;
`

export const TagBox = styled.div`
  width: 100%;
  height: 25px;
  margin: 20px 0;
  background:#5811fa;
`

export const TagText = styled.div`
  font-size: 1.8vmin;
`

export const Img = styled.img`
  background-size: cover;
`

export const PostText = styled.div`
  margin-top: 20px;
  font-size: 2vmin;
  height: 20%;
  /* background: #1fa1fa; */
  font-family: 'paybooc-Medium';
`