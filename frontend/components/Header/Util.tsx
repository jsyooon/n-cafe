'use client';

import Link from 'next/link';
import type { UserType } from '@/types/user';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './style.module.scss';
import type { FetchResponsType } from '@/types/fetch';
import ProfileImage from '../ProfileImage';

interface Props {
  userPromise: FetchResponsType<UserType>;
  size: number;
}

export default async function Util({ userPromise, size }: Props) {
  const fetchUser = async () => {
    try {
      const { data } = await userPromise;
      return data;
    } catch (error) {}
  };

  const user = await fetchUser();

  return (
    <div className={styles.loginButton}>
      {user ? (
        <Link href='/user/profile'>
          <ProfileImage src={user.profileImage} size={size} />
        </Link>
      ) : (
        <Link href='/user/login'>
          <AiOutlineUser size={Math.floor(size * 0.7)} />

          <style jsx>{`
            a {
              width: ${size}px;
              height: ${size}px;
            }
          `}</style>
        </Link>
      )}
    </div>
  );
}
