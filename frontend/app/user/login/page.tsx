import Button from '@/components/Button';
import Logo from '@/components/Logo';
import styles from './style.module.scss';

export default function Login() {
  return (
    <>
      <h2>
        <Logo /> 시작하기
      </h2>
      <div className={styles.loginButton}>
        <Button href='http://localhost:3100/login/kakao' style={{ fillColor: '#FEE500', color: '#191919', width: '100%', height: '3.5em' }}>
          카카오로 시작하기
        </Button>
      </div>
    </>
  );
}
