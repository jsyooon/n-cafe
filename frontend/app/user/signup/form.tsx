'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserInfoForm from '@/components/userInfoForm';
import { fetchPost } from '@/helpers/fetch';
import { USER_QUERY_KEY } from '@/queries/useUserQuery';
import type { UserType } from '@/types/user';

interface Props {
  data: UserType;
}

export default function Form({ data }: Props) {
  const router = useRouter();
  const { mutate } = useMutation({ mutationFn: (body: UserType) => fetchPost('/user/signup', { body }) });
  const queryClient = useQueryClient();
  const onSubmit = async (body: UserType) => {
    mutate(body, {
      async onSuccess() {
        queryClient.invalidateQueries(USER_QUERY_KEY);
        router.replace('/user/welcome');
      },
    });
  };

  return <UserInfoForm data={data} title='회원가입' onSubmit={onSubmit} />;
}
