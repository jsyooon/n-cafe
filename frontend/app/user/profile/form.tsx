'use client';

import { redirect } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserInfoForm from '@/components/userInfoForm';
import { useUserQuery, USER_QUERY_KEY } from '@/queries/user';
import useToast from '@/hooks/useToast';
import { fetchPut } from '@/helpers/fetcher';
import type { UserType } from '@/types/user';

export default function Form() {
  const { data } = useUserQuery();

  const toast = useToast();
  if (!data) redirect('/error/401');

  const { mutate } = useMutation({ mutationFn: (body: UserType) => fetchPut('/user', { body }) });
  const queryClient = useQueryClient();

  const onSubmit = (body: UserType) => {
    mutate(body, {
      onSuccess() {
        queryClient.invalidateQueries(USER_QUERY_KEY);
        toast.success('수정하였습니다.');
      },
    });
  };

  return <UserInfoForm title='회원정보 수정' data={data} onSubmit={onSubmit} />;
}
