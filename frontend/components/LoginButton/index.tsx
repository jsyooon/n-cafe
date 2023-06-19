'use client';

import Button from '@/components/Button';
import { style } from './style';

export default function Login() {
  return (
    <div>
      <Button href='http://localhost:3100/login/kakao' style={{ backgroundColor: '#FEE500', color: '#191919', width: '100%', height: '3.5em', fontSize: '1.2em', radius: '0.2em' }}>
        카카오로 시작하기
      </Button>
      <style jsx>{style}</style>
    </div>
  );
}
