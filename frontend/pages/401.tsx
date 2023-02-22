import ErrorLayout from '@/components/Error/index';

export default function Error404() {
  return <ErrorLayout code={401} type='Unauthorized' message='권한이 없습니다.' />;
}
