'use client';

import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { useUserQuery } from '@/queries/user';
import User from './user';
import styles from './style.module.scss';

export default function Util() {
  const { data } = useUserQuery();

  return (
    <>
      {data ? (
        <User user={data} />
      ) : (
        <Link href='/user/login' className={styles.loginButton}>
          <AiOutlineUser size='70%' />
        </Link>
      )}
    </>
  );
}
