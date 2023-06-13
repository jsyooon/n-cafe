import { cookies } from 'next/headers';
import { Suspense } from 'react';
import Util from 'app/Header/Util';
import Skeleton from 'app/Skeleton';
import { fetchData } from '@/apis/default';
import { cookieToString } from '@/helpers/cookie';
import type { UserType } from '@/types/user';
import './style.scss';

export default function Header() {
  const user = fetchData<UserType>('/user', { headers: { Cookie: cookieToString(cookies().getAll()) } });
  return (
    <header>
      <div className='container'>
        <h1>N cafe</h1>
        <Suspense fallback={<Skeleton width={40} height={40} type='circle' />}>
          <Util userPromise={user} />
        </Suspense>
      </div>
    </header>
  );
}
