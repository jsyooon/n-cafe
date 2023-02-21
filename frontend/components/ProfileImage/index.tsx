/** @jsxImportSource @emotion/react */
import { profileStyle } from '@/components/ProfileImage/style';

export default function Header({ src, size }: { src: string; size?: number }) {
  return <div css={profileStyle(size)}>{src ? <img src={src} /> : ''}</div>;
}
