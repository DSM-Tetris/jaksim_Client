import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
`

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  width: 15%;
  min-height: 200px;
  background: beige;
`

export const Home = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 35px;
  font-size: 20px;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 40px;
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
  font-size: 20px;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 40px;
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
  font-size: 16px;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 60px;
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
  font-size: 16px;
  font-family: "paybooc-Medium";
  margin: 10px;
  margin-left: 30px;
  cursor: pointer;
`