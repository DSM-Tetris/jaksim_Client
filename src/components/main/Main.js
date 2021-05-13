import React, { useEffect, useState } from 'react';
import * as S from './style';
import {useHistory} from 'react-router-dom';
import {Background} from '../shareStyle';
import Header from '../header/Header';

const Main = () => {
  const [isPost, setIsPost] = useState(false);
  const [percent, setPercent] = useState(75);
  const [convertPercent, setConvertPercent] = useState(0);

  const history = useHistory();

  useEffect(()=>{
    const convertToPosition = (percent) => {
      let p = percent;
      if(percent <= 9) p = 35;
      else if(percent <= 19) p = 22;
      else if(percent <= 29) p = 15;
      else if(percent <= 39) p = 10;
      else if(percent <= 49) p = 0;
      else if(percent <= 59) p = -10;
      else if(percent <= 69) p = -20;
      else if(percent <= 79) p = -20;
      else if(percent <= 89) p = -40;
      else if(percent <= 99) p = -50;
      else p = -60;

      setConvertPercent(p);
    }

    convertToPosition(percent);
  },[percent])


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
              <button onClick={()=>setPercent(percent + 5)}></button>
            </S.TextBox>
            <S.BatteryBox>
              <S.BatteryOutter>
                <S.BatteryInner>
                  <S.VPer percent={percent}>{percent}%</S.VPer>
                  <S.Test percent={convertPercent}/>
                  <S.Tet percent={convertPercent}/>
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