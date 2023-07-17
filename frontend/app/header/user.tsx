'use client';

import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ProfileImage from '@/components/profileImage';
import { Dropdown, DropdownSelected, DropdownList } from '@/components/dropdown';
import { USER_QUERY_KEY } from '@/queries/useUserQuery';
import { fetchPost } from '@/helpers/fetch';
import type { UserType } from '@/types/user';

export default function User({ user }: { user: UserType }) {
  const { mutate } = useMutation({ mutationFn: () => fetchPost('/user/logout') });
  const queryClient = useQueryClient();

  const onLogout = () => {
    mutate(null, {
      onSuccess() {
        queryClient.invalidateQueries(USER_QUERY_KEY);
      },
    });
  };

  return (
    <>
      <Dropdown inset='end'>
        <DropdownSelected>
          <ProfileImage src={user.profileImage} />
        </DropdownSelected>
        <DropdownList>
          <Link href='/user/profile'>회원정보 수정</Link>
          <button type='button' onClick={onLogout}>
            로그아웃
          </button>
        </DropdownList>
      </Dropdown>
    </>
  );
}
