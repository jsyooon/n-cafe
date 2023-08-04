import Link from 'next/link';
import Util from './util';
import Logo from '@/components/logo';

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
        <Util />
      </div>
    </header>
  );
}
