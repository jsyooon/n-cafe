export const errorStyle = `
  position: relative;
  height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 15vh;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    .code {
      font-size: 8rem;
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
  }

  .button-wrap {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    gap: 0.5em;

    button,
    a {
      font-size: 0.8rem;
      width: 8em;
    }
  }
`;
