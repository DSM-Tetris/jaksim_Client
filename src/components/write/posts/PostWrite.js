import React, { useState } from 'react';
import * as S from './style';
import {Background} from '../../shareStyle';
import Header from '../../header/Header';

const PostWrite = () => {
  const [file,setFile] = useState('');
  const [preview,setPreview] = useState('');

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
      // height:"200px"
    }}></img>
  :
    picture = <div style={{
      marginTop:"20px",
      height:"200px"
    }}>zzdddddddddddddddddddddddddddddddddddddddddd</div>
  
  return (
    <div>
      <Background />
      <S.Container>
        <Header />
        <S.WriteBox>
          <S.Div>
            <S.TitleInput placeholder="Input Title" />
          </S.Div>
        {picture}
          <S.ContentsInput>
          </S.ContentsInput>
        </S.WriteBox>
        <S.ButtonBox>
          <S.QuitBtn>quit</S.QuitBtn>
          <S.AddBox>
            <S.PictureBtn onChange={handleFile} type="file"></S.PictureBtn>
            <S.PostBtn>posting</S.PostBtn>
          </S.AddBox>
        </S.ButtonBox>
      </S.Container>
    </div>
  );
};

export default PostWrite;