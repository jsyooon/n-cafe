import css from 'styled-jsx/css';

export const buttonStyle = css`
  a {
    text-decoration: none;
    text-align: center;
  }
  a,
  button {
    position: relative;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
    }

    &:hover {
      &:before {
        background-color: rgba(var(--black-color), 0.03);
        transition: background-color 0.2s;
      }
    }

    &:disabled {
      opacity: 0.1;
    }

    > span {
      position: relative;
    }
  }
`;
