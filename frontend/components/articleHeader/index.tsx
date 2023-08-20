import Writer from '@/components/writer';
import { Dropdown, DropdownSelected, DropdownList } from '@/components/dropdown';
import { FiMoreHorizontal } from 'react-icons/fi';
import type { WriterType } from '@/types/feed';
import type { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface Props {
  writer: WriterType;
  createdAt: string;
}

export default function articleHeader({ writer, createdAt, children }: PropsWithChildren<Props>) {
  return (
    <header className={styles.articleHeader}>
      <Writer id={writer.id} name={writer.name} profileImage={writer.profileImage} />
      <div className='date'>
        <span>{new Intl.DateTimeFormat('ko-KR').format(new Date(createdAt))}</span>
      </div>
      <Dropdown className='util-wrap' inset='end'>
        <DropdownSelected>
          <FiMoreHorizontal size={18} />
        </DropdownSelected>
        <DropdownList>{children}</DropdownList>
      </Dropdown>
    </header>
  );
}
