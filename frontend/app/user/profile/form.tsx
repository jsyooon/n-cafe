'use client';

import { redirect } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserInfoForm from '@/components/UserInfoForm';
import { useUserQuery, USER_QUERY_KEY } from '@/queries/useUserQuery';
import { fetchPut } from '@/helpers/fetch';
import type { UserType } from '@/types/user';

export default function Form() {
  const { data } = useUserQuery();
  if (!data) redirect('/error/401');

  const { mutate } = useMutation({ mutationFn: (body: UserType) => fetchPut('/user', { body, cookie: document.cookie }) });
  const queryClient = useQueryClient();

  const onSubmit = (body: UserType) => {
    mutate(body, {
      onSuccess() {
        queryClient.invalidateQueries(USER_QUERY_KEY);
      },
    });
  };

  return <UserInfoForm title='회원정보 수정' data={data} onSubmit={onSubmit} />;
}
