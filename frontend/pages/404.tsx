import ErrorLayout from '@/components/Error/index';

export default function Error404() {
  return <ErrorLayout code={404} type='Not Found' message='페이지를 찾을 수 없습니다.' />;
}
