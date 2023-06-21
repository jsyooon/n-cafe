import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ProfileImage from '@/components/ProfileImage';
import InputText from '@/components/InputText';
import { fetchData } from '@/helpers/fetch';
import { cookieToString } from '@/helpers/cookie';
import Button from '@/components/Button';

import styles from './style.module.scss';
import type { UserType } from '@/types/user';

export default async function Signup() {
  const user = await fetchData<UserType>('/user/signup', { headers: { Cookie: cookieToString(cookies().getAll()) } });
  if (!user.data) redirect('/error/401');

  return (
    <>
      <h2 className={styles.titleStyle}>회원가입</h2>
      <form className={styles.formStyle}>
        <ProfileImage src={user?.data?.profileImage} size={120} />
        <div className={styles.nicknameStyle}>
          <h3>닉네임</h3>
          <InputText initialValue={user.data.name} />
          <Button type='submit' style={{ width: '100%', height: '3em', fillColor: 'rgb(var(--point-color))', fillType: 'fill' }}>
            완료
          </Button>
        </div>
      </form>
    </>
  );
}
