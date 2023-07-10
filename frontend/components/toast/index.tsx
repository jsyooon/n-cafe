'use client';

import { useRecoilValue } from 'recoil';
import { toastListState } from '@/atom';
import ToastItem from './item';
import styles from './style.module.scss';

export default function Toast() {
  const toastList = useRecoilValue(toastListState);

  return (
    !!toastList.length && (
      <div className={styles.toastWrapper}>
        {toastList.map(({ message, id, type, showCloseButton, closeTime }) => (
          <ToastItem type={type} id={id} message={message} showCloseButton={showCloseButton} closeTime={closeTime} key={id.toString()} />
        ))}
      </div>
    )
  );
}
