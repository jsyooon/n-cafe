'use client';

import UserInfoForm from '@/components/UserInfoForm';
import { fetchPost } from '@/helpers/fetch';
import type { UserType } from '@/types/user';

interface Props {
  data: UserType;
}

export default function Form({ data }: Props) {
  const onSubmit = async (body: UserType) => {
    try {
      const response = await fetchPost('/user/signup', { body });
    } catch (error) {}
  };

  return <UserInfoForm data={data} onSubmit={onSubmit} />;
}
