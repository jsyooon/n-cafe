import css from 'styled-jsx/css';

export const style = css`
  div {
    background: rgba(var(--black-color), 0.08);
    animation: animation 1.5s ease-in-out 0.5s infinite;
  }

  @keyframes animation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
`;
