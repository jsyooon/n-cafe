import { useEffect, useRef } from 'react';
import { useDropdownDispatch } from './context';
import userOutSideClick from '@/hooks/userOutSideClick';
import type { ReactNode } from 'react';
import styles from './style.module.scss';

export default function DropdownList({ children }: { children: ReactNode }) {
  const dispatch = useDropdownDispatch();
  const wrapperRef = useRef<HTMLDivElement>();
  const outsideClick = userOutSideClick(wrapperRef);

  useEffect(() => {
    if (outsideClick) dispatch({ type: 'toggle', payload: !outsideClick });
  }, [outsideClick]);

  return (
    <div className={styles.dropdown} ref={wrapperRef}>
      {children}
    </div>
  );
}
