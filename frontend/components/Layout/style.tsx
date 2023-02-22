import { css } from '@emotion/react';

export const globalStyle = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
    font-style: lighter;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: bold;
  }

  html {
    font-size: clamp(16px, 2vw, 20px);
  }

  body {
    font-family: 'Pretendard', sans-serif;
    color: #333;
  }

  html,
  body,
  header,
  section,
  footer,
  div,
  h1,
  h2,
  h3,
  p,
  button {
    margin: unset;
    padding: unset;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  :root {
    --light-grey: #eee;
    --normal-grey: #888;
    --error-color: #ff3c3c;

    --header-height: 60px;
  }
`;

export const layoutStyle = css`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
`;
