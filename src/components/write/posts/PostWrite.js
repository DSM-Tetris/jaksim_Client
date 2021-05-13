import React, { useState } from 'react';
import * as S from './style';
import { Background } from '../../shareStyle';
import Header from '../../header/Header';
import WriteDetail from '../writeDetail/WriteDetail';

const PostWrite = () => {
  const [file,setFile] = useState('');
  const [preview,setPreview] = useState('');
  const [write, setWrite] = useState(false);

  const handleFile = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setPreview(reader.result);
    }
    reader.readAsDataURL(file);
  }

  let picture = null;
  file !== '' 
  ? 
    picture = <img src={preview} style={{
      marginTop:"20px",
      width:"100%",
      backgroundSize:"cover"
    }}></img>
  :
    picture = <div style={{
      // marginTop:"20px",
      // width:"200px",
      // height:"200px",
      // background:"black",
    }}></div>
  
  return (
    <div >
      <Background />
      <S.Container>
        <Header />
        <S.WriteBox>
          <S.TitleInput placeholder="제목을 입력하세요" />
          <S.Line />
        {picture}
          <S.ContentsInput 
            placeholder="지구 어쩌구 저쩌구(300자 이내)" 
            maxLength="300"
          />
        </S.WriteBox>
        <S.ButtonBox>
          <S.QuitBtn>나가기</S.QuitBtn>
          <S.AddBox>
            <S.Label htmlFor="picture-file">
              사진 추가
            </S.Label>
            <S.PictureBtn id="picture-file" onChange={handleFile} type="file"></S.PictureBtn>
            <S.PostBtn onClick={()=>setWrite(true)}>출간하기</S.PostBtn>
          </S.AddBox>
        </S.ButtonBox>
      </S.Container>
      <WriteDetail write={write}/>
    </div>
  );
};

export default PostWrite;