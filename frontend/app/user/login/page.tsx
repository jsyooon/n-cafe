import Button from '@/components/button';
import Logo from '@/components/logo';
import styles from './style.module.scss';

export default async function Login() {
  return (
    <>
      <h2>
        <Logo /> 시작하기
      </h2>
      <div className={styles.loginButton}>
        <Button href='http://localhost:3100/login/kakao' fill className='kakao'>
          카카오로 시작하기
        </Button>
      </div>
    </>
  );
}
