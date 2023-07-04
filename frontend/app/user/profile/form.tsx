'use client';

import UserInfoForm from '@/components/UserInfoForm';
import { useUserQuery } from '@/queries/useUserQuery';

export default function Form() {
  const { data } = useUserQuery();
  const onSubmit = () => {};

  return <UserInfoForm data={data} onSubmit={onSubmit} />;
}
