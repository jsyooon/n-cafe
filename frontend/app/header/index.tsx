import Link from 'next/link';
import { cookies } from 'next/headers';
import Util from './util';
import Logo from '@/components/Logo';
import HydrateOnServer from '@/app/hydrate-on-server';
import { USER_QUERY_KEY, fetchUser } from '@/queries/useUserQuery';

import styles from './style.module.scss';

export default async function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <h1>
          <Link href='/'>
            <Logo />
          </Link>
        </h1>
        <HydrateOnServer queryKey={USER_QUERY_KEY} queryFn={fetchUser(cookies().getAll())}>
          <Util />
        </HydrateOnServer>
      </div>
    </header>
  );
}
