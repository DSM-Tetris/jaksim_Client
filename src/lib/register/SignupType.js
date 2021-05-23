export const successSignup = (setErrorText) => {
  alert("회원가입에 성공하셨습니다.");
  setErrorText(false);
}

export const alreadyUserExists = (setErrorText) => {
  alert("사용중인 아이디 혹은 이메일 입니다.");
  setErrorText(true);

}

export const badRequest = (setErrorText) => {
  alert("입력 형식이 올바르지 않습니다.");
  setErrorText(true);

}

export const verifyEmailFailed = (setErrorText) => {
  alert("인증코드가 일치하지 않습니다.");
  setErrorText(true);

}