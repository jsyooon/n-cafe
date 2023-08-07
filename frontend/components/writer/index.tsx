import Link from 'next/link';
import ProfileImage from '@/components/profileImage';
import type { WriterType } from '@/types/feed';
import styles from './styles.module.scss';

type Props = Omit<WriterType, 'profileImage'> & Partial<Pick<WriterType, 'profileImage'>>;

export default function WriterType({ id, name, profileImage }: Props) {
  return (
    <Link href={`/profile/${id}/${encodeURIComponent(name)}`} className={`writer-wrap ${styles.writerWrap}`}>
      {profileImage && <ProfileImage src={profileImage} />}
      <span className='name'>{name}</span>
    </Link>
  );
}
