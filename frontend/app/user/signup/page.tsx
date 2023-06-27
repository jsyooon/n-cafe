import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchGet } from '@/helpers/fetch';
import Form from './form';
import type { UserType } from '@/types/user';
import styles from './style.module.scss';

export default async function Signup() {
  const getSignupUser = async () => {
    try {
      const response = await fetchGet<UserType>('/user/signup', { cookie: cookies().getAll() });
      return response.data;
    } catch (error) {
      redirect('/error/401');
    }
  };

  const user = await getSignupUser();

  return (
    <>
      <h2 className={styles.titleStyle}>회원가입</h2>
      <Form data={user} />
    </>
  );
}
