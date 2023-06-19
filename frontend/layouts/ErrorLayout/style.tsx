import css from 'styled-jsx/css';

export const errorStyle = css`
  .error-wrap {
    position: relative;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 15vh;
  }

  h2 {
    font-size: inherit;
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    .status {
      font-size: 8em;
      font-weight: 700;
      color: var(--error-color);
    }

    .type {
      font-size: 2rem;
      color: var(--grey-b-color);
      font-weight: 100;

      margin-top: -1.2rem;
    }
  }

  .message {
    margin-top: 1.5rem;
    text-align: center;
  }

  .button-wrap {
    display: flex;
    justify-content: center;
    margin-top: 2em;
    gap: 0.5em;

    button,
    a {
      font-size: 0.8rem;
      width: 8em;
    }
  }
`;
