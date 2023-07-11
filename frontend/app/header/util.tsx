'use client';

import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { useUserQuery } from '@/queries/useUserQuery';
import User from './user';

export default function Util() {
  const { data } = useUserQuery();

  return (
    <div className='user-wrap'>
      {data ? (
        <User user={data} />
      ) : (
        <Link href='/user/login'>
          <AiOutlineUser size='70%' />
        </Link>
      )}
    </div>
  );
}
