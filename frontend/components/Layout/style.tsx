import { css } from '@emotion/react';

export const globalStyle = css`
  html,
  body,
  header,
  section,
  footer,
  div,
  h1,
  h2,
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
  }
`;

export const layoutStyle = css`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
`;
