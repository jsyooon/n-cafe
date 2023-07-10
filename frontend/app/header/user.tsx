'use client';

import Link from 'next/link';
import ProfileImage from '@/components/profileImage';
import type { UserType } from '@/types/user';

export default function User({ user }: { user: UserType }) {
  return (
    <Link href='/user/profile'>
      <ProfileImage src={user.profileImage} />
    </Link>
  );
}
