import { Metadata } from 'next';
import Form from './form';

export const metadata: Metadata = {
  title: '회원정보 수정',
};

export default function Page() {
  return <Form />;
}
