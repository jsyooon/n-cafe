import ErrorLayout from '@/components/Error/index';

export default function Error401() {
  return <ErrorLayout code={401} type='Unauthorized' message='페이지 접근 권한이 없습니다.' />;
}
