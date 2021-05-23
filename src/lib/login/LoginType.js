export const login = (type) => {
  alert("로그인에 성공하였습니다.");
  localStorage.setItem("token", type.accessToken);
  localStorage.setItem("refresh", type.refreshToken);
}

export const invalidLoginInfo = () => {
  alert("로그인에 실패하였습니다.");

}

export const badRequest = () => {
  alert("입력 형식을 확인해주세요.");

}