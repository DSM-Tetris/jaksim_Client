import React from 'react';
import {Background} from '../../shareStyle';
import * as S from './style';

const WriteDetail = () => {
  return (
    <div>
      <Background />
      <S.Container>
        <S.SelectBox>
          <S.MainText>카테고리 설정하기</S.MainText>
          <S.AddCategoryBox>
            <S.CategoryInput placeholder="새로운 카테고리를 추가하세요"/>
            <S.AddBtn>추가하기</S.AddBtn>
          </S.AddCategoryBox>
          <S.SelectCategoryBox>

          </S.SelectCategoryBox>
          <S.MainText>태그 작성하기</S.MainText>
          <S.AddTagBox>
            
          </S.AddTagBox>
        </S.SelectBox>
      </S.Container>
    </div>
  );
};

export default WriteDetail;