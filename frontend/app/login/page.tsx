'use client';

import axios from 'axios';

export default function Login() {
  const authTypes = ['kakao'] as const;

  return (
    <div>
      {authTypes.map((type) => (
        <a key={type} href={`http://localhost:3100/login/${type}`}>
          KAKAO 로그인
        </a>
      ))}
    </div>
  );
}
