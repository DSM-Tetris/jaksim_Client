import React, { useEffect, useState } from 'react';
import * as S from './style';
import {useHistory} from 'react-router-dom';
import {Background} from '../shareStyle';
import Header from '../header/Header';
import { GET_PERCENTAGE_OF_BATTERY } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';

const Main = () => {
  const [isPost, setIsPost] = useState(false);
  const [percent, setPercent] = useState(0);
  const [convertPercent, setConvertPercent] = useState(0);

  const token = localStorage.getItem("token");

  const history = useHistory();

  const {data} = useQuery(GET_PERCENTAGE_OF_BATTERY,{
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    }
  })

  const convertToPosition = (percent) => {
    let p = percent;
    if(percent <= 9) p = 66;
    else if(percent <= 19) p = 60;
    else if(percent <= 29) p = 55;
    else if(percent <= 39) p = 44;
    else if(percent <= 49) p = 33;
    else if(percent <= 59) p = 22;
    else if(percent <= 69) p = 6;
    else if(percent <= 79) p = -5;
    else if(percent <= 89) p = -10;
    else if(percent <= 99) p = -15;
    else p = -20;

    setConvertPercent(p);
  }

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      history.push("/login");
    }
    setPercent(data && data.getPercentageOfBattery.percentageOfBattery);
    convertToPosition(data && data.getPercentageOfBattery.percentageOfBattery);
  },[data])

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
                  <S.VPer percent={percent}>{percent}%</S.VPer>
                  <S.Test percent={convertPercent}/>
                  <S.Tet percent={convertPercent}/>
                </S.BatteryInner>
              </S.BatteryOutter>
            </S.BatteryBox>
          </S.TopInner>
          <S.PostBtn onClick={()=>history.push('/post')}>전체 글 보기</S.PostBtn>
        </S.TopBox>
        <S.BottomBox>
          <S.TextImg />
          <S.Tree />
        </S.BottomBox>
      </S.Container>
    </div>
  );
};

export default Main;