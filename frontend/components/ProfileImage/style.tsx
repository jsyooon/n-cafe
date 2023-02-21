import { css } from '@emotion/react';

export const profileStyle = (size: number) => css`
  width: ${size ?? 50}px;
  height: ${size ?? 50}px;
  overflow: hidden;
  border-radius: 100%;
  background: var(--light-grey);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
