import { css } from '@emotion/react';

export const globalStyle = css`
  html,
  body,
  header,
  section,
  footer,
  div,
  h1,
  button {
    margin: unset;
    padding: unset;
  }
`;

export const contentStyle = css`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
`;
