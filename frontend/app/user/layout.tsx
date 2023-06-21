import styles from './style.module.scss';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${styles.userStyle} container`}>{children}</div>;
}
