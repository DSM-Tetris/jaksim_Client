import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const SelectBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 35%;
  height: 80%;
  padding: 20px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.16);
  background: rgba(255,255,255,0.6);
`

export const MainText = styled.div`
  font-size: 30px;
`

export const Line = styled.form`
  width: 18vw;
  height: 8px;
  margin-top: 5px;
  background: #DFFADA;
  border-radius: 10px;
`

export const AddCategoryBox = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 10px;
  margin: 10px 0;
  width: 100%;
  height: 50px;
  background: white;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.16);
  box-sizing: border-box;
`

export const CategoryInput = styled.input`
  width: 80%;
  height: 100%;
  outline: none;
  border: none;
  /* background: magenta; */
  font-size: 20px;
  box-sizing: border-box;
  font-family: 'paybooc-Bold';

  ::placeholder{
    color: #ADB5BD;
  }
`

export const AddBtn = styled.button`
  border: none;
  outline: none;
  width: 20%;
  height: 100%;
  background: white;
  font-size: 20px;
  color: #4A7A62;
  box-sizing: border-box;
  font-family: 'paybooc-Bold';
`

export const SelectCategoryBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
  background: white;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.16);
`

export const AddTagBox = styled.textarea`
  box-sizing: border-box;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 18%;
  background: white;
  outline: none;
  border: none;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.16);
  font-family: 'paybooc-Bold';
  font-size: 20px;
  resize: none;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 37.2%;
  height: 50px;
  margin-top: 5px;
  box-sizing: border-box;
`

export const Button = styled.button`
  width: 120px;
  height: 100%;
  outline: none;
  border: none;
  background-color: #DEFADA;
  color: #4A7A62;
  font-size: 20px;
  font-family: 'paybooc-Bold';
`