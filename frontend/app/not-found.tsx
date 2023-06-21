import ErrorLayout from '@/layouts/ErrorLayout';

export default function Error404() {
  return <ErrorLayout status={404} type='NOT FOUND' message='페이지를 찾을 수 없습니다.' />;
}
