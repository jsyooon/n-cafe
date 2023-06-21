'use client';

import Link from 'next/link';
import type { UserType } from '@/types/user';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './style.module.scss';
import type { FetchResponsType } from '@/types/fetch';

interface Props {
  userPromise: FetchResponsType<UserType>;
  size: number;
}

export default async function Util({ userPromise, size }: Props) {
  const user = await userPromise;

  return (
    !user.data && (
      <div className={styles.loginButton}>
        <Link href='/user/login'>
          <AiOutlineUser size={Math.floor(size * 0.7)} />
          <style jsx>{`
            a {
              width: ${size}px;
              height: ${size}px;
            }
          `}</style>
        </Link>
      </div>
    )
  );
}
