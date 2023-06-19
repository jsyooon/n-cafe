import css from 'styled-jsx/css';

export const style = css`
  div {
    margin: 0 auto;
    width: 100%;
    max-width: 300px;

    :global(> a) {
      display: block;
    }
  }
`;
