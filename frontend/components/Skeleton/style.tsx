import css from 'styled-jsx/css';

export const style = css`
  div {
    width: ${(props) => props.width}px;
    height: ${(props) => (props.type === 'circle' ? props.width : props.height ?? props.width)}px;
    border-radius: ${(props) => (props.type === 'circle' ? '100%' : props.round ? '2em' : '')};
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
