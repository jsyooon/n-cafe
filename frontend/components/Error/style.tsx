import { css } from '@emotion/react';

export const errorStyle = css`
  position: relative;
  height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: var(--header-height);

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 100;

    .code {
      font-size: 8rem;
      color: var(--error-color);
    }

    .type {
      font-size: 1.8rem;
      color: var(--normal-grey);
      letter-spacing: 2px;
      margin-top: -1.2rem;
    }
  }
  .message {
    margin-top: 1.5rem;
  }
`;
