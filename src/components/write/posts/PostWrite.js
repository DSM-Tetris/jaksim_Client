import React, { useState } from 'react';
import * as S from './style';
import { Background } from '../../shareStyle';
import Header from '../../header/Header';
import { UPLOAD_POST } from '../../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router';

const PostWrite = () => {
  const [file,setFile] = useState('/src/assets/images/fox.png');
  const [preview,setPreview] = useState('');
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    tags: "",
  })
  const token = localStorage.getItem("token");
  const history = useHistory();

  const {title, content, tags} = inputs;

  const post = () => {
    const tagArr = tags ? tags.split(" ") : [];
    ImageMutation({variables: {title, content, tagNames: tagArr},
      context: {
        headers: {
          authorization: token ? `Bearer ${token}` : ""
        },
      },
    });
  }

  const [ImageMutation, {loading, data, error}] = useMutation(UPLOAD_POST,{
    onCompleted: (data) => {
      if(data.uploadPost.__typename === "UploadPost") {
        alert("성공적으로 글을 작성하였습니다.");
        history.push("/post");
        window.location.reload();
      }
    }
  })

  const inputChange = async e => {
    const {name, value} = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const handleFile = async e => {
    let reader = new FileReader();
    let file = e.target.files;
    setFile(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    }
    reader.readAsDataURL(file[0]);
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
          <S.TitleInput 
            name="title" 
            placeholder="제목을 입력하세요" 
            onChange={inputChange}
            value={title} />
          <S.Line />
          <input
            name="tags"
            placeholder="태그 입력(띄어쓰기로 태그를 구분해요)" 
            style={{border:"none",width:"100%",outline:"none",background:"none"}}
            onChange={inputChange}
            value={tags}
          />
        {picture}
          <S.ContentsInput 
            name="content"
            placeholder="지구 어쩌구 저쩌구(300자 이내)" 
            maxLength="300"
            onChange={inputChange}
            value={content}
          />
        </S.WriteBox>
        <S.ButtonBox>
          <S.QuitBtn onClick={()=>history.push("/post")}>나가기</S.QuitBtn>
          <S.AddBox>
            <S.Label htmlFor="picture-file">
              사진 추가
            </S.Label>
            <S.PictureBtn id="picture-file" onChange={handleFile} type="file"></S.PictureBtn>
            <S.PostBtn onClick={post}>출간하기</S.PostBtn>
          </S.AddBox>
        </S.ButtonBox>
      </S.Container>
    </div>
  );
};

export default PostWrite;