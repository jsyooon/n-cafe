export const profileStyle = (size: number) => `
  width: ${size ?? 50}px;
  height: ${size ?? 50}px;
  overflow: hidden;
  border-radius: 100%;
  background: rgba(var(--black-color), 0.1);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
