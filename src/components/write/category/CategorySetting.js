import React from 'react';
import { useHistory } from 'react-router-dom';
import { Background } from '../../shareStyle';
import * as S from './Sstyle';

const CategorySetting = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <Background />
      <S.Container>
      <S.CloseBtn onClick={()=>history.push('/post')}/>
        <S.SelectBox>
          <S.MainText>카테고리 설정하기</S.MainText>
          <S.Line />
          <S.AddCategoryBox>
            <S.CategoryInput placeholder="새로운 카테고리를 추가하세요"/>
            <S.AddBtn>추가하기</S.AddBtn>
          </S.AddCategoryBox>
          <S.SelectCategoryBox />
        </S.SelectBox>
      </S.Container>
    </div>
  );
};

export default CategorySetting;