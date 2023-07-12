import { Metadata } from 'next';
import Logo from '@/components/logo';
import Button from '@/components/button';
import styles from './style.module.scss';

export const metadata: Metadata = {
  title: '회원가입 완료',
};

export default function Welcome() {
  return (
    <>
      <h2>환영합니다.</h2>
      <p className={styles.message}>
        회원가입이 완료되었습니다. <br />
        <Logo />와 함께 즐거운 시간 보내세요!
      </p>
      <Button href='/' className={styles.homeButton} point fill>
        홈으로
      </Button>
    </>
  );
}
