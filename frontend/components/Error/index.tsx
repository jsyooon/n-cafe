import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'app/Button/index';

interface PropsType {
  code: number;
  type: string;
  message: string;
  back?: boolean;
}

export default function ErrorLayout({ code, type, back, message }: PropsType) {
  const router = useRouter();

  return (
    <div>
      <h3 className='title'>
        <span className='code'>{code}</span>
        <span className='type'>{type}</span>
      </h3>
      <p className='message'>{message}</p>
      <div className='button-wrap'>
        <Link href='/'>홈으로</Link>
        {back ? <Button onClick={() => router.back()} title='이전 페이지' /> : ''}
      </div>
    </div>
  );
}
