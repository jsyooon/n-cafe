'use client';

import { AiOutlineUser } from 'react-icons/ai';

export default function ProfileImage({ src, size }: { src?: string; size?: number }) {
  return <div>{src ? <img src={src} /> : <AiOutlineUser />}</div>;
}
