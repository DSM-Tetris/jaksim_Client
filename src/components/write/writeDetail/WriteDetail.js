import React from 'react';
import {Background} from '../../shareStyle';
import CategoryItem from './CategoryItem';
import * as S from './style';

const WriteDetail = () => {
  return (
    <div>
      <Background />
      <S.Container>
        <S.SelectBox>
          <S.MainText>카테고리 설정하기</S.MainText>
          <S.Line />
          <S.AddCategoryBox>
            <S.CategoryInput placeholder="새로운 카테고리를 추가하세요"/>
            <S.AddBtn>추가하기</S.AddBtn>
          </S.AddCategoryBox>
          <S.SelectCategoryBox>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </S.SelectCategoryBox>
          <S.MainText>태그 작성하기</S.MainText>
          <S.Line />
          <S.AddTagBox />
        </S.SelectBox>
        <S.ButtonBox>
          <S.Button>출간하기</S.Button>
        </S.ButtonBox>
      </S.Container>
    </div>
  );
};

export default WriteDetail;