import Link from 'next/link';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import Util from '@/components/Header/Util';
import Logo from '@/components/Logo';
import Skeleton from '@/components/Skeleton';
import { fetchData } from '@/helpers/fetch';
import { cookieToString } from '@/helpers/cookie';
import type { UserType } from '@/types/user';
import './style.scss';

export default function Header() {
  const user = fetchData<UserType>('/user', { headers: { Cookie: cookieToString(cookies().getAll()) } });
  const UTIL_SIZE = 36;

  return (
    <header>
      <div className='container'>
        <h1>
          <Link href='/'>
            <Logo />
          </Link>
        </h1>
        <Suspense fallback={<Skeleton width={UTIL_SIZE} height={UTIL_SIZE} type='circle' />}>
          <Util userPromise={user} size={UTIL_SIZE} />
        </Suspense>
      </div>
    </header>
  );
}
