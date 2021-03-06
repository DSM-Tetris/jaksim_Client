import styled from 'styled-components';

export const PostItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 550px;
  padding: 20px;
  margin-bottom: 50px;
  background: #ffffff;
  border-radius: 20px;
`

export const Container = styled.div`
  display: flex;
  position: relative;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-family: "paybooc-Medium";
`

export const WriteBox = styled.div`
  width: 60%;
  height: 80vh;
  padding: 20px;
  background: rgba(255,255,255,0.7); 
  overflow-y: scroll;
  ::-webkit-scrollbar {
      width: 10px;
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

export const Line = styled.form`
    width: 18vw;
    height: 10px;
    background: #4A7A62;
    border-radius: 10px;
`

export const TitleInput = styled.input`
  position: relative;
  border: none;
  outline: none;
  background: none;
  height: 8vh;
  width: 100%;
  font-size: 2vw;
`

export const ContentsInput = styled.textarea`
  width: 99.5%;
  resize: none;
  height: 30%;
  margin-top: 20px;
  border: none;
  outline: none;
  background: none;
  font-family: "paybooc-Medium";
  font-size: 25px;

  ::placeholder{
    font-size: 25px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 62%;
  height: 50px;
`

export const QuitBtn = styled.button`
  width: 120px;
  height: 100%;
  border: none;
  background: #DEFADA;
  color: #4A7A62;
  font-size: 20px;
  font-family: "paybooc-Bold";
`

export const AddBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  height: 100%;
`

export const PictureBtn = styled.input`
  display: none;
  width: 120px;
  height: 100%;
  border: none;
  margin-right: 10px;
  background: #DEFADA;
  color: #4A7A62;
  font-size: 20px;
`

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
  border: none;
  margin-right: 10px;
  background: #DEFADA;
  color: #4A7A62;
  font-size: 20px;
  font-family: "paybooc-Bold";
`

export const PostBtn = styled.button`
  width: 120px;
  height: 100%;
  border: none;
  background: #DEFADA;
  color: #4A7A62;
  font-size: 20px;
  font-family: "paybooc-Bold";

`

// PostItem style

export const Title = styled.div`
  font-size: 30px;
`

export const TagBox = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 15px;
  margin: 10px 0;
  font-size: 15px;
`

export const Tag = styled.div`
  display: flex;
  margin-right: 10px;
  color: #555555;
`

export const Thumbnail = styled.div`
  width: 100%;
  height: 80%;
  background-image: ${props => props.image ? `url(${props.image})`:'url("/src/assets/images/jok.jpg")'};
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 10px;
`

export const Text = styled.div`
  width: 100%;
  height: 12%;
  font-size: 15px;  
  margin-bottom: -10px;
  overflow-wrap: break-word;
`