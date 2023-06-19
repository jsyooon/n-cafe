import './style.scss';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <div className='login-wrap container'>{children}</div>;
}
