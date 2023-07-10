'use client';

import { redirect } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserInfoForm from '@/components/userInfoForm';
import { fetchPost } from '@/helpers/fetch';
import { USER_QUERY_KEY } from '@/queries/useUserQuery';
import type { UserType } from '@/types/user';

interface Props {
  data: UserType;
}

export default function Form({ data }: Props) {
  const { mutate } = useMutation({ mutationFn: (body: UserType) => fetchPost('/user/signup', { body }) });
  const queryClient = useQueryClient();
  const onSubmit = async (body: UserType) => {
    mutate(body, {
      onSuccess() {
        queryClient.invalidateQueries(USER_QUERY_KEY);
        redirect('/user/welcome');
      },
    });
  };

  return <UserInfoForm data={data} title='회원가입' onSubmit={onSubmit} />;
}
