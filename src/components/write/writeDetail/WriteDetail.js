import React from 'react';
import CategoryItem from './CategoryItem';
import * as S from './style';

const WriteDetail = ({write}) => {
  return (
    <div>
      <S.Container write={write}>
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
          <S.Button onClick={()=>{console.log("tlqkf")}}>글 수정</S.Button>
          <S.Button>출간하기</S.Button>
        </S.ButtonBox>
      </S.Container>
    </div>
  );
};

export default WriteDetail;