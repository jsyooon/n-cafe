'use client';

import { useRouter } from 'next/navigation';
import Button from 'app/Button';
import type { UserType } from '@/types/user';

interface Props {
  userPromise: Promise<UserType>;
}

export default async function Util({ userPromise }: Props) {
  const buttonStyle = { colorType: 'point-default', height: '2.2em', fontSize: '0.9em', padding: '0 1em', radius: '0.2em' };

  const router = useRouter();
  const user = await userPromise;

  const onClickUserButton = (url) => {
    router.push(url);
  };

  return (
    !user && (
      <div>
        <Button style={buttonStyle} onClick={() => onClickUserButton('/signup')}>
          회원가입
        </Button>
        <Button style={buttonStyle} onClick={() => onClickUserButton('/login')}>
          로그인
        </Button>
        <style jsx>{`
          div :global(button:not(:first-child)) {
            margin-inline-start: 0.5em;
          }
        `}</style>
      </div>
    )
  );
}
