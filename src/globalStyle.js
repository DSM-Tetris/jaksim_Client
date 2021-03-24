import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'paybooc-Bold', 'sans-serif';
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #4aff51;
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  }

  @font-face {
    font-family: 'paybooc-ExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-ExtraBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'paybooc-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'paybooc-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'paybooc-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalStyle;