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
      width:"100%",
      // height:"200px"
    }}></img>
  :
    picture = <div style={{
      marginTop:"20px",
      width:"200px",
      height:"200px",
      background:"black",
    }}></div>
  
  return (
    <div>
      <Background />
      <S.Container>
        <Header />
        <S.WriteBox>
          <S.TitleInput placeholder="Input Title" />
          <S.Line />
        {picture}
          <S.ContentsInput placeholder="지구 어쩌구 저쩌구">
          </S.ContentsInput>
        </S.WriteBox>
        <S.ButtonBox>
          <S.QuitBtn>quit</S.QuitBtn>
          <S.AddBox>
            <S.Label htmlFor="picture-file">
              add
            </S.Label>
            <S.PictureBtn id="picture-file" onChange={handleFile} type="file"></S.PictureBtn>
            <S.PostBtn>posting</S.PostBtn>
          </S.AddBox>
        </S.ButtonBox>
      </S.Container>
    </div>
  );
};

export default PostWrite;