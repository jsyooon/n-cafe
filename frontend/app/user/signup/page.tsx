import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchData } from '@/helpers/fetch';
import { cookieToString } from '@/helpers/cookie';
import type { UserType } from '@/types/user';
import ProfileImage from '@/components/ProfileImage';

export default async function Signup() {
  const user = await fetchData<UserType>('/user/signup', { headers: { Cookie: cookieToString(cookies().getAll()) } });
  if (!user.data) redirect('/error/401');

  return (
    <>
      <h2>회원가입</h2>
      <ProfileImage src={user?.data?.profileImage} />
      <div>
        <h3>이름</h3>
        <input type='text' value={user?.data?.name} />
      </div>
    </>
  );
}
