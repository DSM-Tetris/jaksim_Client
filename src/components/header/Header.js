import React from 'react';
import { useHistory } from 'react-router';
import * as S from './style';

const Header = () => {
  const history = useHistory();

  const logout = () => {
    alert("로그아웃에 성공하셨습니다.");
    history.push("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
  }

  return (
    <S.Logout onClick={logout}>로그아웃</S.Logout>
  );
};

export default Header;