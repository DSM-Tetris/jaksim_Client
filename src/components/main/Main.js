import React, { useState } from 'react';
import * as S from './style';
import {useHistory} from 'react-router-dom';
import {Background} from '../shareStyle';
import Header from '../header/Header';

const Main = () => {
  const [isPost, setIsPost] = useState(true);

  const history = useHistory();

  return (
    <div>
      <Background />
      <S.Container>
        <Header />
        <S.TopBox>
          <S.TodayTag>오늘의 태그는 <S.TagText>#플라스틱</S.TagText> 입니다</S.TodayTag>
          <S.TopInner>
            <S.TextBox>
              <S.Write>{isPost ? "NOW" : "NOT"}</S.Write>
              <S.Green>GREEN</S.Green>
            </S.TextBox>
            <S.BatteryBox>
              <S.BatteryOutter>
                <S.BatteryInner>
                  <S.VPer>50%</S.VPer>
                  <S.Test />
                  <S.Tet />
                </S.BatteryInner>
              </S.BatteryOutter>
            </S.BatteryBox>
          </S.TopInner>
          <S.PostBtn onClick={()=>history.push('/post')}>전체 글 보기</S.PostBtn>
        </S.TopBox>
      </S.Container>
    </div>
  );
};

export default Main;