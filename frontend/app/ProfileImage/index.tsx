'use client';

export default function ProfileImage({ src, size }: { src: string; size?: number }) {
  return <div>{src ? <img src={src} /> : ''}</div>;
}
