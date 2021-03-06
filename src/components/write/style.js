import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`

export const PostsView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  /* height: 60vh; */
  margin-top: 150px;
`

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 300px;
  left: 2%;
  width: 15%;
  min-height: 12.5rem;
`

export const Home = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 35px;
  font-size: 1.25rem;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 13%;
  cursor: pointer;

  ::before{
    content: "";
    position: absolute;
    left: -30px;
    background: url("/src/assets/images/growth.png");
    width: 25px;
    height: 25px;
  }
`

export const Category = styled.div`
  position: relative;
  font-size: 1.25rem;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 13%;
  cursor: pointer;

  ::before{
    content: "";
    position: absolute;
    left: -30px;
    background: url("/src/assets/images/palm-tree.png");
    width: 25px;
    height: 25px;
  }
`

export const CategoryItem = styled.div`
  position: relative;
  font-size: 1rem;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 23%;
  cursor: pointer;

  ::before{
    content: "";
    position: absolute;
    left: -30px;
    background: url("/src/assets/images/palm-tree.png");
    background-size: cover;
    width: 20px;
    height: 20px;
  }
`

export const CategorySetting = styled.div`
  font-size: 1rem;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 13%;
  cursor: pointer;
`

export const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 150px;
  left: 75%;
  width: 13%;
  height: 400px;
  border: 1px solid #EEF1F3;
  border-radius: 10px;
  background: rgba(255,255,255,0.7);

  ::before{
    content: "?????? ??????";
    position: absolute;
    top: -7%;
    width: 100px;
    height: 1.2rem;
    font-size: 1.2rem;
    color: #121212;
    /* background-color: #a7101a; */
  }
`

export const Tags = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 2rem;
  padding: 0 0.4rem;
  margin-top: 0.3rem;
  /* background-color: #f916a8; */
`