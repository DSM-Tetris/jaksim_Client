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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-family: "paybooc-Medium";
  overflow-y: scroll;
`

export const WriteBox = styled.div`
  width: 60%;
  height: 80vh;
  padding: 20px;
  background: rgba(255,255,255,0.7); 
  overflow-y: scroll;
`

export const Div = styled.form`
  ::after{
    position: absolute;
    content: "";
    width: 18vw;
    height: 10px;
    background: #4A7A62;
    border-radius: 10px;
  }
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
  height: 55%;
  margin-top: 20px;
  border: none;
  outline: none;
  background: none;
  font-family: "paybooc-Medium";
  font-size: 25px;
  overflow-y: scroll;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 62%;
  height: 50px;
`

export const QuitBtn = styled.button`
  width: 120px;
  height: 100%;
  border: none;
  background: #DEFADA;
  color: #4A7A62;
  font-size: 25px;
`

export const AddBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  height: 100%;
`

export const PictureBtn = styled.input`
  width: 120px;
  height: 100%;
  border: none;
  margin-right: 10px;
  background: #DEFADA;
  color: #4A7A62;
  font-size: 25px;
`

export const PostBtn = styled.button`
  width: 120px;
  height: 100%;
  border: none;
  background: #DEFADA;
  color: #4A7A62;
  font-size: 25px;
`

// PostItem style

export const Title = styled.div`
  font-size: 30px;
`

export const TagBox = styled.div`
  width: 100%;
  height: 15px;
  margin: 10px 0;
  font-size: 15px;
`

export const Tag = styled.p`
  margin: 0;
`

export const Thumbnail = styled.div`
  width: 100%;
  height: 80%;
  background-image: url("/src/assets/images/team_logo.png");
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