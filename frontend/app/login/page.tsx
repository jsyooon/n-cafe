import Button from 'app/Button';
import './style.scss';

export default function Login() {
  return (
    <div className='login-button-wrap'>
      <Button href='http://localhost:3100/login/kakao' style={{ backgroundColor: '#FEE500', color: '#191919', width: '100%', height: '3.5em', fontSize: '1.2em', radius: '0.2em' }}>
        KAKAO 로그인
      </Button>
    </div>
  );
}
