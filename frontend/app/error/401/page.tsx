'use client';

import ErrorLayout from 'layouts/ErrorLayout';

export default function Error401() {
  return <ErrorLayout status={401} type='UNAUTHORIZED' message='권한이 없습니다.' />;
}
