import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSignupUser } from '@/apis/user';
import ProfileImage from '@/components/ProfileImage/index';
import type { UserType } from '@/types/user';

export const SignUp = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h2>회원가입</h2>
      <div>{user?.name}</div>
      <ProfileImage src={user?.profileImage} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ user: UserType }> = async function (context) {
  const user = await getSignupUser(context.req.cookies);
  if (!user) {
    return {
      redirect: {
        destination: '/401',
        permanent: true,
      },
    };
  }
  return {
    props: {
      user,
    },
  };
};

export default SignUp;
